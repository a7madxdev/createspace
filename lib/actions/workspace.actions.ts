"use server";

import { createWorkspaceSchema } from "@/schemas/workspace";
import { actionClient } from "../safe-action";
import { auth } from "@/auth";
import {
  createMembership,
  createWorkspace,
} from "../services/workspace.services";
import { revalidatePath } from "next/cache";

export const createWorkspaceAction = actionClient
  .inputSchema(createWorkspaceSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth();
    if (!session)
      return {
        success: false,
        message: "Unauthenticated",
      };
    const workspace = await createWorkspace(parsedInput);
    await createMembership({
      workspaceId: workspace.id,
      userId: session.user.id,
      role: "OWNER",
    });
    revalidatePath("/workspaces");
    return {
      success: true,
    };
  });
