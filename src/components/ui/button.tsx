import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 active:opacity-90 motion-reduce:transition-none motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_8px_30px_rgba(var(--primary),0.3)] hover:bg-primary/90 hover:shadow-[0_12px_40px_rgba(var(--primary),0.5)] hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_8px_30px_rgba(var(--destructive),0.2)]",
        outline: "border border-ui-border bg-transparent hover:bg-ui-surface-hover hover:text-accent-foreground hover:border-ui-border-hover hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5 shadow-sm",
        ghost: "hover:bg-ui-surface-hover hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 text-foreground shadow-xl",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
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
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
