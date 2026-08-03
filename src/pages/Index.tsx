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
        title="Central de Documentação e Conhecimento | Pedrinpass"
        description="Monte um site de documentação profissional com busca por command palette, referência de API e changelog. Tema escuro e navegação com scroll-spy."
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
