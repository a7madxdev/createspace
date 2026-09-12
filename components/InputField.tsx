import { LucideIcon } from "lucide-react";
import React, { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type InputFieldProps = {
  theme?: "default";
  Icon?: LucideIcon;
  setValue?: (value: string) => void;
} & ComponentPropsWithRef<"input">;

function InputField({
  theme = "default",
  value,
  setValue,
  className,
  type = "text",
  disabled,
  id,
  placeholder,
  Icon,
}: InputFieldProps) {
  const themes = {
    default: "border-slate-300",
  };
  return (
    <div
      className={twMerge(
        "border h-10 rounded-md flex items-center",
        Icon ? "px-2 gap-2" : "",
        disabled && "opacity-50 pointer-events-none",
        themes[theme],
        className,
      )}
    >
      {Icon && <Icon size={18} />}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`size-full text-sm ${Icon ? "" : "px-2"}`}
        disabled={disabled}
        onChange={({ target: { value } }) => setValue?.(value)}
      />
    </div>
  );
}

export default InputField;
