import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CardVisual, { type CardVisualVariant } from "./CardVisual";

interface CategoryCardProps {
  variant: CardVisualVariant;
  title: string;
  description: string;
  linkText: string;
  href: string;
  featured?: boolean;
}

const CategoryCard = ({ variant, title, description, linkText, href, featured = false }: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className={`bento-card group flex h-full flex-col ${featured ? "md:flex-row" : ""}`}
    >
      {/* Animated visual */}
      <div className={`p-4 pb-0 ${featured ? "md:w-1/2 md:pb-4 md:pr-0" : ""}`}>
        <CardVisual variant={variant} featured={featured} />
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col justify-center gap-4 p-6 ${featured ? "md:w-1/2" : ""}`}>
        <div className="flex flex-col gap-2">
          <h3 className={`font-display font-semibold text-foreground ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {/* CTA Link */}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary-glow">
          <span>{linkText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
