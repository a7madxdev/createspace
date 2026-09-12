import prisma from "@/lib/prisma";
import { Session } from "next-auth";

export const getMemberships = (session: Session) =>
  prisma.membership.findMany({
    where: { userId: session.user.id },
    select: {
      workspace: {
        select: {
          id: true,
          name: true,
          description: true,
          _count: {
            select: {
              memberships: true,
              projects: true,
            },
          },
        },
      },
    },
  });

export const getWorkspaceInfo = (id: string) =>
  prisma.workspace.findUnique({
    where: { id },
    select: {
      name: true,
      description: true,
      projects: {
        select: {
          id: true,
          name: true,
          description: true,
          tasks: { where: { isDone: true }, select: { isDone: true } },
          _count: {
            select: {
              tasks: true,
            },
          },
        },
      },
      _count: {
        select: {
          memberships: true,
        },
      },
    },
  });
