"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";
function Header() {
  const { openSidebar } = useSidebar();
  return (
    <header className="bg-blue-50 border-b border-blue-200 flex items-center px-3 gap-3">
      <button
        className="size-9 grid place-items-center rounded-full duration-150 hover:bg-black/10 md:hidden"
        onClick={openSidebar}
      >
        <Menu size={20} />
      </button>
      <h1 className="text-xl font-medium flex-1">Workspaces</h1>
      <div className="flex items-center gap-3">
        <button className="size-9 grid place-items-center rounded-full duration-150 hover:bg-black/10">
          <Bell size={20} />
        </button>
        <Image
          src="/images/profile.png"
          alt="profile-pic"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
