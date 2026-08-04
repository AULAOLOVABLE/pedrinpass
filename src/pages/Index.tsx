import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Support } from "@/components/support";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";
import { MatrixRain, ScrollProgress, ScrollReveal } from "@/components/effects";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Seo
        title="PedrinTEC | Soluções e Recursos Premium para IA"
        description="Descubra as melhores ferramentas, prompts e extensões para potencializar seu fluxo de trabalho com IA."
        path="/"
      />
      <MatrixRain />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal>
            <Categories />
          </ScrollReveal>
          <ScrollReveal>
            <Support />
          </ScrollReveal>
          <ScrollReveal>
            <AIAssistant />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
