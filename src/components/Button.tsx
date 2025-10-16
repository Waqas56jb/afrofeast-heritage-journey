import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
};

export default function Button({
  variant = "primary",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#F4B942] text-[#1E332F] hover:bg-[#F1C564] focus:ring-[#F4B942] shadow-sm",
    secondary: "border border-[#244848] text-[#244848] hover:bg-[#EFF4F3] focus:ring-[#2A685F]",
    ghost: "text-[#244848] hover:bg-[#EFF4F3] focus:ring-[#2A685F]",
  } as const;

  return (
    <button
      className={`${base} ${variants[variant]} ${className ?? ""} ${
        loading || disabled ? "opacity-70 cursor-not-allowed" : ""
      }`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span className="relative inline-flex items-center gap-2">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#1E332F]/30 border-t-[#1E332F]" />
          <span>Loading…</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
