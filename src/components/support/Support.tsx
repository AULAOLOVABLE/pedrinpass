import { motion } from "framer-motion";
import { MessageSquare, Headset } from "lucide-react";
import SupportCard from "./SupportCard";
import supportBg from "@/assets/support-bg.png";
import WaveText from "@/components/ui/wave-text";

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Entre na Comunidade",
    description: "Receba acesso antecipado a novos recursos e novos prompts toda semana.",
    linkText: "Participar",
    href: "/docs/community",
  },
  {
    icon: Headset,
    title: "Recursos em Destaque",
    description: "Prompts Premium, Templates Lovable, Cursor Rules e Claude Commands.",
    linkText: "Ver Recursos",
    href: "/docs/featured",
  },
];

const Support = () => {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Card Container with Background */}
        <div 
          className="relative rounded-[2rem] border border-border overflow-hidden p-6 md:p-10 shadow-[0_40px_80px_-60px_hsl(var(--primary)/0.6)]"
          style={{
            backgroundImage: `url(${supportBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Section Heading */}
          <div className="mb-8 flex flex-col gap-3">
            <span className="eyebrow">Suporte</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              <WaveText text="Comunidade e suporte" />
            </h2>
          </div>

          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {supportOptions.map((option) => (
              <motion.div
                key={option.title}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                  },
                }}
              >
                <SupportCard
                  icon={option.icon}
                  title={option.title}
                  description={option.description}
                  linkText={option.linkText}
                  href={option.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
