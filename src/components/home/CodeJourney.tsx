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
    <div ref={containerRef} className="relative w-full h-[200vh] bg-background/50">
      <div 
        ref={sectionRef} 
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6"
      >
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative">
          
          {/* Step 1: Idea */}
          <div className="journey-step flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary glow-sm">
              <Terminal className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Ideia</span>
              <p className="text-xs text-muted-foreground mt-1">Concepção do Software</p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <svg width="40" height="2" className="overflow-visible">
              <line 
                x1="0" y1="1" x2="40" y2="1" 
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
              <p className="text-xs text-muted-foreground mt-1">Integração de APIs</p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <svg width="40" height="2" className="overflow-visible">
              <line 
                x1="0" y1="1" x2="40" y2="1" 
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
              <p className="text-xs text-muted-foreground mt-1">Inteligência Neural</p>
            </div>
          </div>

          {/* Mobile Connectors (simplified) */}
          <div className="md:hidden flex flex-col items-center gap-4">
             <div className="w-px h-12 bg-primary/20" />
          </div>

          <div className="col-span-1 md:col-span-5 flex flex-col items-center mt-12">
            <div className="journey-step flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
              </div>
              <div className="journey-step relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-primary-foreground shadow-[0_0_50px_rgba(255,106,26,0.4)]">
                  <Rocket className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-2 block">Deploy Completo</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Produto em Produção</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
