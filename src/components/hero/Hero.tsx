import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bgWaveAsset from "@/assets/bg-wave.png.asset.json";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="global-wrapper relative w-full h-screen overflow-hidden bg-background flex flex-col justify-center items-center text-center p-6 md:p-12">
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
        className="relative z-10 flex flex-col items-center max-w-5xl cursor-default group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ 
          scale: isHovered ? 1.02 : 1,
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
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground leading-[0.9] mb-8 relative inline-block">
            PedrinTEC
            {/* Animated Underline */}
            <motion.span 
              className="absolute -bottom-2 left-0 h-[4px] bg-primary shadow-[0_0_20px_rgba(255,107,74,0.5)]"
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
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-3xl leading-[1.4] transition-all duration-300">
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
          <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,74,0.3)] active:scale-95 transition-all duration-300">
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
