import React, { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  theme?: "default" | "primary";
  size?: "small" | "normal" | "big";
  disabled?: boolean;
} & ComponentPropsWithRef<"button">;

function Button({
  children,
  className,
  theme = "default",
  size = "normal",
  onClick,
  disabled = false,
  ref,
}: ButtonProps) {
  const themes = {
    default: "bg-slate-300 text-slate-600",
    primary: "bg-blue-600 text-white",
  };
  const sizes = {
    small: "h-8 px-5 text-sm",
    normal: "h-10 px-6",
    big: "h-12 px-5",
  };
  return (
    <button
      className={twMerge(
        "rounded-full duration-150 hover:scale-96 disabled:opacity-50 disabled:pointer-events-none",
        className,
        themes[theme],
        sizes[size],
      )}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default Button;
