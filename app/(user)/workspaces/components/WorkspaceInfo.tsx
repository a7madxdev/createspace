"use client";

import Button from "@/components/Button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import AddMemberModal from "./AddMemberModal";
import Overlay from "@/components/Overlay";
import { useState } from "react";

function WorkspaceInfo({
  id,
  name,
  description,
  members,
  projects,
}: {
  id: string;
  name: string;
  description?: string | null;
  members: number;
  projects: number;
}) {
  const [isAddMemberModalVisible, setIsAddMemberModalVisible] = useState(false);
  return (
    <>
      <div className="mb-6">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex gap-2">
          <p className="text-sm text-slate-700">
            <span className="font-medium text-slate-800">{members}</span>{" "}
            Members
          </p>
          <p className="text-sm text-slate-700">
            <span className="font-medium text-slate-800">{projects}</span>{" "}
            Projects
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            {[0, 1, 2].map((i) => (
              <Image
                src="/images/profile.png"
                alt="Profile pic"
                width={32}
                height={32}
                key={i}
                className="size-8 rounded-full -mr-3 border border-slate-700"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              className=""
              theme="primary"
              onClick={() => setIsAddMemberModalVisible(true)}
            >
              Add Members
            </Button>
            <button className="size-10 bg-slate-100 border border-slate-200 rounded-md grid place-items-center duration-150 hover:scale-95">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>
      <AddMemberModal
        workspaceId={id}
        visible={isAddMemberModalVisible}
        close={() => setIsAddMemberModalVisible(false)}
      />
      <Overlay visible={isAddMemberModalVisible} />
    </>
  );
}

export default WorkspaceInfo;
