import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Support } from "@/components/support";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Seo
        title="Central de Documentação e Conhecimento | Compass"
        description="Monte um site de documentação profissional com busca por command palette, referência de API e changelog. Tema escuro e navegação com scroll-spy."
        path="/"
      />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Support />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
