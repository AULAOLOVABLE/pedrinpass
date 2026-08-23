import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { CinematicHero as Hero } from "@/components/hero/CinematicHero";
import { NeuralGrid } from "@/components/home/NeuralGrid";
import { CodeJourney } from "@/components/home/CodeJourney";
import { ProductDemo } from "@/components/home/ProductDemo";
import { Dashboard } from "@/components/dashboard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Support } from "@/components/support";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";
import { MatrixRain, ScrollProgress, ScrollReveal, SmoothScroll } from "@/components/effects";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
      
      // Update mouse-based background glow if needed or just use scroll for subtle shifts
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener("scroll", handleScroll);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // GSAP ScrollTrigger for parallax and reveals
    const ctx = gsap.context(() => {
      // Parallax and Reveal for Bento cards
      gsap.utils.toArray<HTMLElement>('.bento-card').forEach((card) => {
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0,
            scale: 0.9,
          },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              end: "top center",
              scrub: 1, // Smooth scrub for interactive feel
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Dashboard sticky reveal sync
      const dashboardTrigger = document.querySelector("#dashboard-trigger");
      const crmContainer = document.querySelector(".crm-container") as HTMLElement;
      
      if (dashboardTrigger && crmContainer) {
        ScrollTrigger.create({
          trigger: dashboardTrigger,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            crmContainer.style.transform = `scale(${0.6 + (progress * 0.4)}) translateY(${(1 - progress) * 150}px) perspective(1000px) rotateX(${(1 - progress) * 10}deg)`;
            crmContainer.style.opacity = `${Math.min(progress * 2.5, 1)}`;
            crmContainer.style.filter = `none`;
          }
        });
      }
    }, mainRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);
  return (
    <div ref={mainRef} className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Seo
        title="PedrinTEC — Engenharia de Software de Próxima Geração"
        description="A plataforma definitiva para desenvolvedores: marketplace de prompts, extensões e automação neural."
        path="/"
      />
      
      <SmoothScroll />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MatrixRain />
        <div className="absolute inset-0 bg-radial-at-t from-primary/5 via-transparent to-transparent opacity-10 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
      </div>

      <ScrollProgress />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="grain-overlay" />
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Hero />
          
          <CodeJourney />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 py-16">
            <ScrollReveal delay={0.3} yOffset={40}>
              <section id="marketplace" className="scroll-mt-32">
                <div className="mb-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-2">Catálogo Premium</span>
                  <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-4">Explore o Ecossistema</h2>
                  <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
                    De prompts premium a workflows complexos, tudo o que você precisa para escalar sua produção com IA em um único lugar.
                  </p>
                </div>
                <NeuralGrid />
              </section>
            </ScrollReveal>

            <ProductDemo />

            <section id="dashboard-trigger" className="reveal-wrapper">
              <div 
                className="crm-container opacity-0"
                style={{
                  transform: `scale(0.7) translateY(100px)`,
                }}
              >
                <div id="dashboard" className="scroll-mt-32">
                  <div className="p-8 md:p-12 pb-0 text-center max-w-4xl mx-auto">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-2">Métricas de Precisão</span>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2">Marketplace de Performance</h2>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Dados reais para decisões cirúrgicas. Acompanhe a evolução do seu ecossistema em tempo real com transparência absoluta.
                    </p>
                  </div>
                  <Dashboard />
                </div>
              </div>
            </section>

            <ScrollReveal delay={0.4} yOffset={40}>
              <section id="assistant" className="scroll-mt-32">
                <AIAssistant />
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.5} yOffset={40}>
              <Support />
            </ScrollReveal>
          </div>
        </main>

        <Footer />
        
        {/* Sticky Mobile CTA - Refined for Minimalist look */}
        <div className={`sticky-cta-mobile px-6 ${showStickyCTA ? 'visible' : ''}`}>
          <button className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2 active:scale-[0.95] transition-all border border-primary/20">
            Começar Agora <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
