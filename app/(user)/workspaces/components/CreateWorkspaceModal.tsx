import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { createWorkspaceAction } from "@/lib/actions/workspace.actions";
import {
  CreateWorkspaceInput,
  createWorkspaceSchema,
} from "@/schemas/workspace";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Controller, useForm } from "react-hook-form";

function CreateWorkspaceModal({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWorkspaceInput>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const { execute, status } = useAction(createWorkspaceAction, {
    onSuccess({ data }) {
      if (data.success) {
        reset();
        close();
      }
    },
  });
  const isPending = status === "executing";
  const onSubmit = (data: CreateWorkspaceInput) => {
    execute(data);
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bg-white fixed left-1/2 translate-x-[-50%] top-13 z-20 p-3 rounded-xl w-85 max-w-[calc(100%-32px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Create Workspace</h3>
            <button
              className="size-7 bg-slate-200 rounded-md grid place-items-center duration-150 hover:scale-96 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => {
                close();
                reset();
              }}
              disabled={isPending}
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-sm mb-2">
              <label htmlFor="workspace-name">Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <InputField
                    id="workspace-name"
                    placeholder="Workspace name"
                    name="name"
                    value={watch("name")}
                    setValue={(value) => field.onChange(value)}
                    disabled={isPending}
                  />
                )}
              />
            </div>
            <div className="text-sm mb-2">
              <label htmlFor="workspace-desc">
                Description{" "}
                <span className="text-slate-500 italic">Optional</span>
              </label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <InputField
                    id="workspace-desc"
                    placeholder="Describe your workspace"
                    name="name"
                    value={watch("description")}
                    setValue={(value) => field.onChange(value)}
                    disabled={isPending}
                  />
                )}
              />
            </div>
            {(errors.name || errors.description) && (
              <p className="text-sm text-red-600 my-2">
                {errors.name?.message || errors.description?.message || ""}
              </p>
            )}
            <Button theme="primary" className="w-full">
              Create Workspace
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CreateWorkspaceModal;
