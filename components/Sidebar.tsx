"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import { Home, X } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  return (
    <aside
      className={`row-span-2 bg-blue-500 fixed h-full w-62.5 duration-150 z-10 md:static ${isOpen ? "left-0" : "-left-62.5"}`}
    >
      <div className="h-13 flex items-center justify-between px-3">
        <h1 className="text-xl text-white font-bold">CreateSpace</h1>
        <button
          className="size-9 grid place-items-center rounded-full text-white duration-150 hover:bg-white/20 md:hidden"
          onClick={closeSidebar}
        >
          <X size={22} />
        </button>
      </div>
      <ul className="px-1.5">
        <li>
          <Link
            href="#"
            className="h-10 flex items-center gap-2 px-2 text-white rounded-sm duration-150 hover:bg-white/20"
          >
            <span>
              <Home size={20} />
            </span>
            <label className="pointer-events-none">Home</label>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
