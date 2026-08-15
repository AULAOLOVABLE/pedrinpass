import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { CinematicHero as Hero } from "@/components/hero/CinematicHero";
import { Categories } from "@/components/categories";
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
    };
    window.addEventListener("scroll", handleScroll);

    // GSAP ScrollTrigger for parallax and reveals
    const ctx = gsap.context(() => {
      // Parallax for Bento cards
      gsap.utils.toArray<HTMLElement>('.bento-card').forEach((card) => {
        gsap.fromTo(card, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
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
            crmContainer.style.transform = `scale(${0.7 + (progress * 0.3)}) translateY(${(1 - progress) * 100}px)`;
            crmContainer.style.opacity = `${Math.min(progress * 2, 1)}`;
          }
        });
      }
    }, mainRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div className="bg-gradient-animated" />
        <div className="absolute inset-0 bg-radial-at-t from-primary/5 via-transparent to-transparent opacity-50" />
      </div>

      <ScrollProgress />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-48 py-32">
            <section id="dashboard-trigger" className="reveal-wrapper">
              <div 
                className="crm-container opacity-0"
                style={{
                  transform: `scale(0.7) translateY(100px)`,
                }}
              >
                <div id="dashboard" className="scroll-mt-32">
                  <div className="p-8 md:p-12 pb-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">Métricas de Precisão</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Marketplace de Performance</h2>
                    <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                      Dados reais para decisões cirúrgicas. Acompanhe a evolução do seu ecossistema em tempo real com transparência absoluta.
                    </p>
                  </div>
                  <Dashboard />
                </div>
              </div>
            </section>

            <ScrollReveal delay={0.3} yOffset={40}>
              <section id="marketplace" className="scroll-mt-32">
                <div className="mb-16">
                  <span className="eyebrow block mb-4">Catálogo Premium</span>
                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Explore o Ecossistema</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    De prompts premium a workflows complexos, tudo o que você precisa para escalar sua produção com IA em um único lugar.
                  </p>
                </div>
                <Categories />
              </section>
            </ScrollReveal>

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
          <button className="w-full bg-primary text-primary-foreground py-5 rounded-full font-bold text-base shadow-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
            Começar Agora <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
