import { motion } from "framer-motion";
import { MessageSquare, Headset, HelpCircle, ShieldCheck } from "lucide-react";
import SupportCard from "./SupportCard";
import supportBg from "@/assets/support-bg.png";
import WaveText from "@/components/ui/wave-text";

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Entre na Comunidade",
    description: "Troque experiências com mais de 12.000 desenvolvedores e receba prompts semanais.",
    linkText: "Participar",
    href: "/docs/community",
  },
  {
    icon: HelpCircle,
    title: "FAQ Orientado a Decisão",
    description: "Dúvidas sobre integração, limites de API ou segurança? Encontre respostas rápidas aqui.",
    linkText: "Ver FAQ",
    href: "/docs/faq",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Performance",
    description: "Infraestrutura resiliente com 99.9% de uptime garantido em contrato para planos Enterprise.",
    linkText: "Ver SLA",
    href: "/docs/sla",
  },
  {
    icon: Headset,
    title: "Suporte Especializado",
    description: "Time sênior disponível para auxiliar na arquitetura de seus fluxos neurais mais complexos.",
    linkText: "Falar com Consultor",
    href: "/contact",
  },
];

const Support = () => {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Card Container with Background */}
        <div 
          className="relative rounded-xl border border-ui-border overflow-hidden p-6 md:p-10 shadow-2xl"
          style={{
            backgroundImage: `url(${supportBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Section Heading */}
          <div className="mb-8 flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Suporte</span>
            <h2 className="text-2xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
              Comunidade e Suporte
            </h2>
          </div>

          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
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
