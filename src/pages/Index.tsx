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
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-32 pb-32">
            <ScrollReveal delay={0.2}>
              <section id="dashboard" className="scroll-mt-24">
                <div className="mb-12 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tightest mb-4">Marketplace de Performance</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl">Dados reais para decisões cirúrgicas. Acompanhe a evolução do seu ecossistema em tempo real.</p>
                </div>
                <Dashboard />
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section id="marketplace" className="scroll-mt-24">
                <div className="mb-12 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tightest mb-4">Explore o Ecossistema</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl">De prompts premium a workflows complexos, tudo o que você precisa para escalar sua produção com IA.</p>
                </div>
                <Categories />
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section id="assistant" className="scroll-mt-24">
                <AIAssistant />
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Support />
            </ScrollReveal>
          </div>
        </main>

        <Footer />
        
        {/* Sticky Mobile CTA */}
        <div className={`sticky-cta-mobile ${showStickyCTA ? 'visible' : ''}`}>
          <button className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(var(--primary),0.3)] flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
            Criar Minha Extensão <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
