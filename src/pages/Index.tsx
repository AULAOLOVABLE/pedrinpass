import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { CinematicHero as Hero } from "@/components/hero/CinematicHero";
import { Categories } from "@/components/categories";
import { Dashboard } from "@/components/dashboard";
import { Support } from "@/components/support";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";
import { MatrixRain, ScrollProgress, ScrollReveal, SmoothScroll } from "@/components/effects";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
      
      const dashboardSection = document.getElementById("dashboard-trigger");
      if (dashboardSection) {
        const sectionTop = dashboardSection.offsetTop;
        const sectionHeight = dashboardSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Match the logic from the instruction: progress = scrolled / (height - windowHeight)
        // We use scroll position relative to the section start
        const relativeScroll = window.scrollY - sectionTop;
        const scrollRange = sectionHeight - windowHeight;
        const progress = Math.min(Math.max(relativeScroll / scrollRange, 0), 1);
        
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
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
                className="crm-container"
                style={{
                  transform: `scale(${0.7 + (scrollProgress * 0.3)}) translateY(${(1 - scrollProgress) * 100}px)`,
                  opacity: Math.min(scrollProgress * 2, 1)
                }}
              >
                <div id="dashboard" className="scroll-mt-32">
                  <div className="p-8 md:p-12 pb-0">
                    <span className="eyebrow block mb-4">Métricas de Precisão</span>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Marketplace de Performance</h2>
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
