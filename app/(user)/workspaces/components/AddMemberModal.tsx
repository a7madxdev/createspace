"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { searchUsersAction } from "@/lib/actions/user.actions";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function AddMemberModal({
  workspaceId,
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
  workspaceId: string;
}) {
  const [data, setData] = useState<
    {
      id: string;
      name: string | null;
      email: string | null;
      image: string | null;
    }[]
  >([]);
  const [value, setValue] = useState("");
  const [query] = useDebounce(value, 500);
  const { execute } = useAction(searchUsersAction, {
    onSuccess({ data }) {
      if (data.success && data.data) {
        setData(data.data);
      }
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setData([]);
      setValue("");
    }, 0);
  }, [visible]);
  useEffect(() => {
    if (query) execute({ workspaceId, query });
  }, [query, execute, workspaceId]);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bg-white fixed left-1/2 translate-x-[-50%] top-13 z-20 p-3 rounded-xl w-85 max-w-[calc(100%-32px)] h-[calc(100%-104px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Add Member</h3>
            <button
              className="size-7 bg-slate-200 rounded-md grid place-items-center duration-150 hover:scale-96 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => {
                close();
              }}
            >
              <X size={20} />
            </button>
          </div>
          <InputField
            Icon={Search}
            placeholder="Search by user's email"
            className="flex-1"
            value={value}
            setValue={setValue}
          />
          <div className="py-3">
            {data.map((u) => (
              <div className="flex items-center gap-2" key={u.id}>
                <Image
                  src={u.image || ""}
                  alt={u.name || ""}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p className="flex-1 text-sm overflow-hidden text-ellipsis text-nowrap">
                  {u.name}
                </p>
                <Button theme="primary" size="small">
                  Add
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AddMemberModal;
