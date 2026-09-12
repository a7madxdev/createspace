"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import Overlay from "@/components/Overlay";

function WorkspacesActionBar() {
  const [isCreateWorkspaceModalVisible, setIsCreateWorkspaceModalVisible] =
    useState(false);
  return (
    <>
      <div className="w-full flex gap-2">
        <InputField
          Icon={Search}
          placeholder="Search in workspaces"
          className="flex-1"
        />
        <button className="size-10 bg-slate-100 border border-slate-200 rounded-md grid place-items-center duration-150 hover:scale-95">
          <Filter size={20} />
        </button>
        <Button
          theme="primary"
          onClick={() => setIsCreateWorkspaceModalVisible(true)}
        >
          Create workspace
        </Button>
      </div>
      <CreateWorkspaceModal
        visible={isCreateWorkspaceModalVisible}
        close={() => setIsCreateWorkspaceModalVisible(false)}
      />
      <Overlay visible={isCreateWorkspaceModalVisible} />
    </>
  );
}

export default WorkspacesActionBar;
