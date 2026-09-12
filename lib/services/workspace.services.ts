import { Role } from "@prisma/client";
import prisma from "../prisma";

export const createWorkspace = (data: {
  name: string;
  description?: string | null;
}) => {
  return prisma.workspace.create({
    data,
  });
};

export const createMembership = (data: {
  workspaceId: string;
  userId: string;
  role: Role;
}) => {
  return prisma.membership.create({
    data,
  });
};
