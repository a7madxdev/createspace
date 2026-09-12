import z from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(5, "Workspace name must be at least 5 charcters"),
  description: z.string().trim().optional(),
});

//? Types
export type CreateWorkspaceInput = z.infer<typeof createWorkspaceSchema>;
