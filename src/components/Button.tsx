import React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-[#F4B942] text-[#1E332F] hover:bg-[#F1C564] shadow-md hover:shadow-lg",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg",
        outline:
          "border border-[#244848] bg-transparent text-[#244848] hover:bg-[#EFF4F3] hover:text-[#1E332F] shadow-sm hover:shadow-md",
        secondary: "bg-[#2D5A5A] text-white hover:bg-[#2A685F] shadow-md hover:shadow-lg",
        ghost: "text-[#244848] hover:bg-[#EFF4F3] hover:text-[#1E332F]",
        link: "text-[#F4B942] underline-offset-4 hover:underline",
        premium:
          "bg-gradient-to-r from-[#F4B942] to-[#E8A63A] text-[#1E332F] hover:from-[#F1C564] hover:to-[#E8A63A] shadow-lg hover:shadow-xl",
        success: "bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600 shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
  animation?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      animation = true,
      ...props
    },
    ref,
  ) => {
    const buttonContent = (
      <>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </>
    );

    if (animation) {
      const { onDrag, onDragEnd, onDragStart, ...motionProps } = props as any;
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={loading || disabled}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          {...motionProps}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
