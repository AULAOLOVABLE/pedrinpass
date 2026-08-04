import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

/** Seção que ganha vida no scroll: escala, blur e opacidade dopaminérgicas. */
const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
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
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
