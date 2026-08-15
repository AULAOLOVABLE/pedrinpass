import ChatBox from "./ChatBox";
import bgWave from "@/assets/bg-wave.png";
import WaveText from "@/components/ui/wave-text";

const AIAssistant = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            <WaveText text="Assistente de Inteligência Neural" />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            <WaveText text="Interaja com o núcleo da PedrinTEC através de linguagem natural para automações e consultas complexas." staggerDelay={0.01} />
          </p>
        </div>

        {/* Chat Box */}
        <ChatBox />
      </div>
    </section>
  );
};

export default AIAssistant;
