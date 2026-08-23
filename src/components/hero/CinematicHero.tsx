import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero3D } from './Hero3D';
import { MagneticButton } from '../motion';
import { ArrowRight } from 'lucide-react';

const FallbackBackground = () => (
  <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15)_0%,transparent_80%)]" />
    <div className="absolute inset-0 opacity-20">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary rounded-full blur-[1px]"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.8, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  </div>
);


export const CinematicHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<FallbackBackground />}>
          <Hero3D />
        </Suspense>
      </div>


      {/* Content Overlay */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6"
      >
        <div className="max-w-7xl w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 0.15, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-primary pointer-events-none select-none opacity-10 whitespace-nowrap"
          >
            PEDRINTEC
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="relative z-10"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/80 block mb-6 animate-pulse">
              Engineered for Innovation
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter text-foreground leading-[0.8] mb-8 uppercase overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
                className="block"
              >
                CONSTRUA.
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
                className="block text-primary"
              >
                APRENDA.
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
                className="block"
              >
                AUTOMATIZE.
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[10px] md:text-xs text-muted-foreground font-bold tracking-[0.3em] uppercase max-w-xl mx-auto leading-relaxed mb-12"
            >
              Arquitetando o futuro através de <span className="text-primary">IA Generativa</span> e <span className="text-primary">Engenharia Neural</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <MagneticButton>
                <button 
                  className="px-10 py-5 bg-primary text-primary-foreground text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(255,106,26,0.3)] hover:shadow-[0_0_50px_rgba(255,106,26,0.5)] transition-all duration-500 active:scale-95 flex items-center gap-3 group"
                  onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>
              <button 
                className="px-10 py-5 border border-white/10 hover:border-white/20 text-[10px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-500 active:scale-95 text-muted-foreground hover:text-foreground"
                onClick={() => window.open('/docs', '_blank')}
              >
                Documentation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default CinematicHero;