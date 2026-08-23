import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionTemplate } from "framer-motion";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

/** Seção que ganha vida no scroll: escala, blur e opacidade dopaminérgicas. */
export const ScrollReveal = ({ children, className = "", delay = 0, yOffset = 40 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 1 });
  
  // High-End Entrance
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [yOffset, 0]);
  
  // Subtle Blur Exit (High-End feel)
  const blur = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [4, 0, 0, 2]);
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
