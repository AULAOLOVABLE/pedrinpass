import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Cpu, Network, Zap, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const CodeJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".journey-step");
      const lines = gsap.utils.toArray<SVGLineElement>(".journey-line");

      // Master Timeline for the scroll journey
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: sectionRef.current,
        },
      });

      // Step 1: Idea -> Code (0 - 0.25)
      tl.fromTo(steps[0], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(lines[0], { strokeDashoffset: 100, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 1 }, "-=0.5");

      // Step 2: Code -> API (0.25 - 0.50)
      tl.fromTo(steps[1], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(lines[1], { strokeDashoffset: 100, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 1 }, "-=0.5");

      // Step 3: API -> AI (0.50 - 0.75)
      tl.fromTo(steps[2], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(lines[2], { strokeDashoffset: 100, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 1 }, "-=0.5");

      // Step 4: AI -> Deploy (0.75 - 1.00)
      tl.fromTo(steps[3], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(steps[4], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.7)" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[220vh] bg-background">
      <div 
        ref={sectionRef} 
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6"
      >
        <div className="max-w-5xl w-full relative">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
            {/* Step 1: Idea */}
            <div className="journey-step flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary glow-sm">
                <Terminal className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Ideia</span>
                <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">Concepção</p>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <svg width="60" height="2" className="overflow-visible">
                <line 
                  x1="0" y1="1" x2="60" y2="1" 
                  className="journey-line stroke-primary stroke-2"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                />
              </svg>
            </div>

            {/* Step 2: Code/API */}
            <div className="journey-step flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary glow-sm">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Conexão</span>
                <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">API & Código</p>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <svg width="60" height="2" className="overflow-visible">
                <line 
                  x1="0" y1="1" x2="60" y2="1" 
                  className="journey-line stroke-primary stroke-2"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                />
              </svg>
            </div>

            {/* Step 3: AI */}
            <div className="journey-step flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary glow-sm">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">IA</span>
                <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">Inteligência</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-16 md:mt-24 relative z-10">
            <div className="journey-step flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <svg width="2" height="60" className="overflow-visible hidden md:block">
                  <line 
                    x1="1" y1="0" x2="1" y2="60" 
                    className="journey-line stroke-primary stroke-2"
                    style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                  />
                </svg>
                <div className="md:hidden w-px h-12 bg-primary/20" />
              </div>
              
              <div className="journey-step relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/40 transition-all duration-700 rounded-full" />
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-[3rem] bg-primary flex items-center justify-center text-primary-foreground shadow-[0_0_80px_-10px_rgba(255,106,26,0.5)] transition-transform duration-500 group-hover:scale-110">
                  <Rocket className="w-10 h-10 md:w-16 md:h-16" />
                </div>
              </div>
              
              <div className="text-center mt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2 block animate-pulse">Deploy Status: Active</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">Produto Finalizado</h3>
              </div>
            </div>
          </div>

          {/* Background decoration for the journey */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[400px] border border-primary/5 rounded-[3rem] -z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
