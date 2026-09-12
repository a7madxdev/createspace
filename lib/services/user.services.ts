import prisma from "../prisma";

export const searchUsers = (
  userId: string,
  workspaceId: string,
  query: string,
) => {
  return prisma.user.findMany({
    where: {
      id: { not: userId },
      memberships: { none: { workspaceId } },
      email: { contains: query, mode: "insensitive" },
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
    take: 8,
  });
};
