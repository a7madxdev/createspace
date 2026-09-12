"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { Filter, MoreVertical, Search } from "lucide-react";

function ProjectsActionBar() {
  return (
    <>
      <div className="w-full flex gap-2 mb-3 lg:col-span-2">
        <InputField
          Icon={Search}
          placeholder="Search in workspace"
          className="flex-1"
        />
        <button className="size-10 bg-slate-100 border border-slate-200 rounded-md grid place-items-center duration-150 hover:scale-95">
          <Filter size={20} />
        </button>
        <Button theme="primary">Create...</Button>
        <button className="size-10 bg-slate-100 border border-slate-200 rounded-md grid place-items-center duration-150 hover:scale-95">
          <MoreVertical size={20} />
        </button>
      </div>
    </>
  );
}

export default ProjectsActionBar;
