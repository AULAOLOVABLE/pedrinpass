import * as React from "react"
import { cn } from "@/lib/utils"

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    title: string
    description?: string
    action?: React.ReactNode
  }
>(({ className, icon, title, description, action, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300",
      className
    )}
    {...props}
  >
    {icon && (
      <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary animate-pulse">
        {icon}
      </div>
    )}
    <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
      {title}
    </h3>
    {description && (
      <p className="mt-2 text-sm text-muted-foreground max-w-[250px]">
        {description}
      </p>
    )}
    {action && <div className="mt-6">{action}</div>}
  </div>
))
EmptyState.displayName = "EmptyState"

export { EmptyState }
