import ChatBox from "./ChatBox";
import bgWave from "@/assets/bg-wave.png";
import WaveText from "@/components/ui/wave-text";

const AIAssistant = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-black text-foreground uppercase tracking-tighter mb-4">
            Assistente Neural
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Interaja com o núcleo da PedrinTEC através de linguagem natural.
          </p>
        </div>

        {/* Chat Box */}
        <ChatBox />
      </div>
    </section>
  );
};

export default AIAssistant;
