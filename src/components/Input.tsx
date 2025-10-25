import React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Search, X } from "lucide-react";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-black text-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-[#E5E7EB] focus:border-[#F4B942] focus:ring-[#F4B942]/20",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500/20",
        success: "border-green-500 focus:border-green-500 focus:ring-green-500/20",
        warning: "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500/20",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  animation?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      type = "text",
      leftIcon,
      rightIcon,
      clearable = false,
      onClear,
      animation = true,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [value, setValue] = React.useState(props.value || "");

    const inputType = type === "password" && showPassword ? "text" : type;
    const hasValue = value && value.toString().length > 0;

    const handleClear = () => {
      setValue("");
      onClear?.();
    };

    const inputElement = (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A2ACB6]">{leftIcon}</div>
        )}
        <input
          type={inputType}
          className={cn(
            inputVariants({ variant, size, className }),
            leftIcon && "pl-10",
            (rightIcon || type === "password" || clearable) && "pr-10",
          )}
          ref={ref}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange?.(e);
          }}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#A2ACB6] hover:text-[#6B7280] transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}
          {clearable && hasValue && (
            <button
              type="button"
              onClick={handleClear}
              className="text-[#A2ACB6] hover:text-[#6B7280] transition-colors"
            >
              <X size={16} />
            </button>
          )}
          {rightIcon && type !== "password" && !clearable && (
            <div className="text-[#A2ACB6]">{rightIcon}</div>
          )}
        </div>
      </div>
    );

    if (animation) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {inputElement}
        </motion.div>
      );
    }

    return inputElement;
  },
);

Input.displayName = "Input";

// Search Input Component
export interface SearchInputProps extends Omit<InputProps, "leftIcon"> {
  onSearch?: (value: string) => void;
  searchValue?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, searchValue, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        leftIcon={<Search size={16} />}
        placeholder="Search..."
        clearable
        onClear={() => onSearch?.("")}
        onChange={(e) => onSearch?.(e.target.value)}
        value={searchValue}
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
