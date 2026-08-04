import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Seção que ganha vida no scroll: escala, blur e opacidade dopaminérgicas. */
export const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 20, mass: 0.5 });
  const opacity = useTransform(progress, [0, 0.6], [0, 1]);
  const scale = useTransform(progress, [0, 1], [0.96, 1]);
  const y = useTransform(progress, [0, 1], [40, 0]);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale, y }} 
      className={className}
      initial={{ opacity: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
