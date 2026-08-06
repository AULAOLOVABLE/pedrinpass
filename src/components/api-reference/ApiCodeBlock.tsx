import { cn } from "@/lib/utils";

interface ApiCodeBlockProps {
  children: string;
  className?: string;
}

export function ApiCodeBlock({ children, className }: ApiCodeBlockProps) {
  return (
    <pre
      className={cn(
        "bg-ui-surface/60 border border-ui-border rounded-xl p-5 overflow-x-auto text-sm font-mono text-foreground scrollbar-none backdrop-blur-sm shadow-inner shadow-white/5",
        className
      )}
    >
      <code className="leading-relaxed">{children}</code>
    </pre>
  );
}
