import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function AuthLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (session) redirect("/workspaces");
  return <div className="size-full flex justify-center">{children}</div>;
}

export default AuthLayout;
