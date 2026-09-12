import { auth } from "@/auth";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function UserLoyout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/signin");
  return (
    <div className="size-full grid grid-cols-1 md:grid-cols-[250px_1fr] grid-rows-[52px_1fr] overflow-hidden">
      <Sidebar />
      <Header />
      <main className="size-full overflow-auto p-3">{children}</main>
    </div>
  );
}
