import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionTemplate } from "framer-motion";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

/** Seção que ganha vida no scroll: escala, blur e opacidade dopaminérgicas. */
export const ScrollReveal = ({ children, className = "", delay = 0, yOffset = 60 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 20, mass: 0.5 });
  const opacity = useTransform(progress, [0, 0.4, 0.8], [0, 0.5, 1]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);
  const y = useTransform(progress, [0, 1], [yOffset, 0]);
  const blur = useTransform(progress, [0, 0.8], [10, 0]);
  const blurValue = useMotionTemplate`blur(${blur}px)`;
  
  if (reduced) return <div className={className}>{children}</div>;
  
  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale, y, filter: blurValue }} 
      className={className}
      initial={{ opacity: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
