"use client";

import Button from "@/components/Button";
import React, { useState } from "react";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import Overlay from "@/components/Overlay";

function NoWorkspaces() {
  const [isCreateWorkspaceModalVisible, setIsCreateWorkspaceModalVisible] =
    useState(false);
  return (
    <>
      <div className="w-full mt-18 text-center">
        <p className="text-sm mb-2 text-slate-700">
          You are not in any workspace right now.
        </p>
        <Button
          theme="primary"
          onClick={() => setIsCreateWorkspaceModalVisible(true)}
        >
          Create my own workspace
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

export default NoWorkspaces;
