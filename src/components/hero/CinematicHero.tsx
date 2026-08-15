import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const FallbackBackground = () => (
  <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,74,0.15)_0%,transparent_80%)]" />
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
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
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
        <FallbackBackground />
      </div>


      {/* Content Overlay */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="eyebrow block mb-6 animate-pulse">Engenharia de Elite</span>
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter text-foreground leading-[0.8] mb-12 drop-shadow-[0_0_30px_rgba(255,107,74,0.3)]">
            PedrinTEC
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl mx-auto leading-relaxed mb-16">
            A convergência entre <span className="text-primary font-medium italic">design minimalista</span> e <span className="text-primary font-medium italic">engenharia neural</span>. O futuro do desenvolvimento começa aqui.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              className="glass-button glass-button-primary group px-12 py-5 text-lg"
              onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Ecossistema
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
            <button 
              className="glass-button group px-12 py-5 text-lg"
              onClick={() => window.open('/docs', '_blank')}
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">Documentação</span>
            </button>
          </div>
        </motion.div>
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