import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";

const clientId = process.env.AUTH_GOOGLE_ID || "";
const clientSecret = process.env.AUTH_GOOGLE_CLIENT || "";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({ clientId, clientSecret })],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
