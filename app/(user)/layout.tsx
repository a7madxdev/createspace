import { auth } from "@/auth";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

function UserLoyout({ children }: { children: ReactNode }) {
  return (
    <div className="size-full grid grid-cols-1 md:grid-cols-[250px_1fr] grid-rows-[52px_1fr] overflow-hidden">
      <Sidebar />
      <Header />
      <main className="size-full overflow-auto p-3">{children}</main>
    </div>
  );
}

export default UserLoyout;
