import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bgWaveAsset from "@/assets/bg-wave.png.asset.json";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="global-wrapper relative w-full h-screen overflow-hidden bg-[#121212] flex flex-col justify-end items-start p-[64px_24px_48px] md:p-[64px_80px_60px]">
      {/* Background with Ken Burns effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.4,
          transition: { duration: 10, ease: "linear" } 
        }}
      >
        <img 
          src={bgWaveAsset.url} 
          alt="" 
          className="w-full h-full object-cover mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-start max-w-4xl cursor-default group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ 
          x: isHovered ? 10 : 0,
          transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
        }}
      >
        {/* Headline with Staggered Reveal */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.1, 
            ease: [0.19, 1, 0.22, 1] 
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#E0E0E0] leading-[1.1] mb-6 relative inline-block">
            PedrinTEC
            {/* Animated Underline */}
            <motion.span 
              className="absolute bottom-0 left-0 h-[2px] bg-[#888]"
              initial={{ width: 0, left: "50%" }}
              animate={{ 
                width: isHovered ? "100%" : "0%",
                left: isHovered ? "0%" : "50%"
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </h1>
        </motion.div>

        {/* Subheadline with Delay */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: isHovered ? 1 : 0.7 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3, 
            ease: [0.19, 1, 0.22, 1] 
          }}
        >
          <p className="text-lg md:text-xl text-[#888] font-light tracking-wide max-w-2xl leading-[1.4] transition-all duration-300">
            Construindo a próxima geração de ecossistemas digitais. 
            Uma fusão entre engenharia de precisão e design minimalista 
            para operações de alto impacto.
          </p>
        </motion.div>

        {/* Call to action or secondary text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5, 
            ease: [0.19, 1, 0.22, 1] 
          }}
          className="mt-12"
        >
          <button className="text-sm uppercase tracking-[0.2em] text-[#E0E0E0] border-b border-[#E0E0E0]/20 pb-1 hover:border-[#E0E0E0] transition-colors duration-300">
            Explorar Ecossistema
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle bottom indicator */}
      <motion.div 
        className="absolute bottom-12 right-12 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#888]/50 rotate-90 origin-right">
          Est. 2026 / PT-BR
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
