import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-ui-surface-hover/50 duration-[1500ms] motion-reduce:animate-none motion-reduce:bg-ui-surface-hover/20", className)}
      {...props}
    />
  )
}

export { Skeleton }
