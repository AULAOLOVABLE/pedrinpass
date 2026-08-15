import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
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
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * 15; // Inclinação X
    const rotateY = ((x / rect.width) - 0.5) * -15; // Inclinação Y
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <Link
      ref={cardRef}
      to={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-animado group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform duration-200 ease-out border border-ui-border bg-ui-surface/40 backdrop-blur-xl ${featured ? "md:flex-row" : ""}`}
      style={{ transform, willChange: "transform" }}
    >
      <div className="card-inner rounded-xl overflow-hidden flex flex-col flex-1">
        {/* Animated visual */}
        <div className={`p-4 pb-0 ${featured ? "md:w-1/2 md:pb-4 md:pr-0" : ""}`}>
          <CardVisual variant={variant} featured={featured} />
        </div>

        {/* Content */}
        <div className={`flex flex-1 flex-col justify-center gap-4 p-6 ${featured ? "md:w-1/2" : ""}`}>
          <div className="flex flex-col gap-2">
            <h3 className={`font-display font-black text-foreground uppercase tracking-tight ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
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
      </div>
    </Link>
  );
};

export default CategoryCard;
