import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Dashboard } from "@/components/dashboard";
import { Support } from "@/components/support";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";
import { MatrixRain, ScrollProgress, ScrollReveal } from "@/components/effects";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
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
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MatrixRain />
        <div className="absolute inset-0 bg-radial-at-t from-primary/5 via-transparent to-transparent opacity-50" />
      </div>

      <ScrollProgress />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-48 py-32">
            <ScrollReveal delay={0.2} yOffset={40}>
              <section id="dashboard" className="scroll-mt-32">
                <div className="mb-16">
                  <span className="eyebrow block mb-4">Métricas de Precisão</span>
                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Marketplace de Performance</h2>
                  <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
                    Dados reais para decisões cirúrgicas. Acompanhe a evolução do seu ecossistema em tempo real com transparência absoluta.
                  </p>
                </div>
                <Dashboard />
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3} yOffset={40}>
              <section id="marketplace" className="scroll-mt-32">
                <div className="mb-16">
                  <span className="eyebrow block mb-4">Catálogo Premium</span>
                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Explore o Ecossistema</h2>
                  <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
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
          <button className="w-full bg-[#E0E0E0] text-[#121212] py-4 rounded-full font-medium text-base shadow-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
            Começar Agora <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
