import React from "react";
import { motion } from "framer-motion";

interface LightSweepProps {
  color?: string;
  delay?: number;
}

export const LightSweep: React.FC<LightSweepProps> = ({ 
  color = "rgba(255, 106, 26, 0.2)", 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ left: "-100%" }}
      animate={{ left: "200%" }}
      transition={{ 
        duration: 2.5, 
        repeat: Infinity, 
        ease: "easeInOut",
        repeatDelay: 3 + delay 
      }}
      className="absolute top-0 bottom-0 w-64 skew-x-[-25deg] pointer-events-none z-10"
      style={{
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
      }}
    />
  );
};
