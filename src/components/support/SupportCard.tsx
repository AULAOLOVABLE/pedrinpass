import { Link } from "react-router-dom";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface SupportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const SupportCard = ({ icon: Icon, title, description, linkText, href }: SupportCardProps) => {
  return (
    <Link
      to={href}
      className="bento-card group flex flex-col lg:flex-row items-center gap-4 p-5 bg-background/60 backdrop-blur-sm"
      style={{
        boxShadow: `0px 3px 6px 0px rgba(0, 0, 0, 0.1), 
                    inset 0px -3px 2px 0px rgba(255, 255, 255, 0.03), 
                    inset 0px 0.6px 0.36px -1.17px rgba(255, 255, 255, 0.10), 
                    inset 0px 2.29px 1.37px -2.33px rgba(255, 255, 255, 0.09), 
                    inset 0px 10px 6px -3.5px rgba(255, 255, 255, 0.045)`
      }}
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full border border-primary/30 bg-primary/10 transition-colors group-hover:border-primary/60">
        <Icon className="w-5 h-5 text-primary-glow" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0 text-center lg:text-left">
        <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground lg:truncate">{description}</p>
      </div>

      {/* CTA Link */}
      <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0 transition-colors group-hover:text-primary-glow">
        <span>{linkText}</span>
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default SupportCard;
