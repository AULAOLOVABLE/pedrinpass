import { cn } from "@/lib/utils";

type BadgeVariant = "fixes" | "improvements" | "features";

interface ChangelogBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  fixes: "bg-primary/5 text-primary/70 border-primary/15",
  improvements: "bg-primary/10 text-primary border-primary/25",
  features: "bg-primary/20 text-primary-glow border-primary/40",
};

const ChangelogBadge = ({ variant, children }: ChangelogBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variantStyles[variant]
      )}
    >
      {children}
    </span>
  );
};

export default ChangelogBadge;
