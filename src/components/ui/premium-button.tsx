// src/components/ui/premium-button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-3d hover:shadow-3d-sm hover:translate-y-0.5 active:translate-y-1 active:shadow-none",
        outline: "border-2 border-rose-200 bg-white text-rose-600 shadow-3d hover:shadow-3d-sm",
        ghost: "hover:bg-rose-50 hover:text-rose-600",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 py-1 text-xs",
        lg: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animated?: boolean;
  href?: string;
  fullWidth?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, animated = true, asChild = false, href, fullWidth, icon: Icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const content = (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), fullWidth && "w-full")}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none rounded-full" />
        <span className="relative z-10 flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4" />}
          {children}
        </span>
      </Comp>
    );

    if (href) {
      return (
        <a href={href}>
          {animated ? <motion.div whileHover={{ y: -2 }} whileTap={{ y: 2 }}>{content}</motion.div> : content}
        </a>
      );
    }

    return animated ? <motion.div whileHover={{ y: -2 }} whileTap={{ y: 2 }}>{content}</motion.div> : content;
  }
);

PremiumButton.displayName = "PremiumButton";

export { PremiumButton, buttonVariants };