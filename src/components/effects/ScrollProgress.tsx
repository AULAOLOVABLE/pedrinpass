import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progresso de scroll com brilho vermelho. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-primary-glow to-primary shadow-[0_0_18px_hsl(var(--primary)/0.9)]"
    />
  );
};

export default ScrollProgress;
