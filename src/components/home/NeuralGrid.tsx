import React from "react";
import { Terminal, Cpu, Layout, ShoppingCart, Zap, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LightSweep } from "../effects/LightSweep";

const categories = [
  {
    title: "Prompts",
    description: "Engenharia de prompts otimizada para modelos de linguagem de larga escala.",
    icon: Terminal,
    color: "rgba(255, 106, 26, 0.1)",
  },
  {
    title: "Extensões",
    description: "Plugins modulares e ferramentas de produtividade para o seu stack.",
    icon: Zap,
    color: "rgba(37, 99, 235, 0.1)",
  },
  {
    title: "Templates",
    description: "Estruturas de design premium e arquiteturas de software prontas.",
    icon: Layout,
    color: "rgba(147, 51, 234, 0.1)",
  },
  {
    title: "Automações",
    description: "Fluxos de trabalho inteligentes e agentes autônomos de execução.",
    icon: Cpu,
    color: "rgba(22, 163, 74, 0.1)",
  },
  {
    title: "APIs",
    description: "Pontos de extremidade de alta performance para integração neural.",
    icon: ShoppingCart,
    color: "rgba(220, 38, 38, 0.1)",
  },
  {
    title: "Trilhas",
    description: "Jornadas de aprendizado técnico e curadoria de conteúdo especializado.",
    icon: BookOpen,
    color: "rgba(202, 138, 4, 0.1)",
  },
];

export const NeuralGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.19, 1, 0.22, 1],
            delay: index * 0.1 
          }}
          viewport={{ once: true }}
          className="glass-premium glow-neural group relative p-10 flex flex-col items-start text-left overflow-hidden"
        >
          <LightSweep delay={index * 0.5} />
          
          <div className="relative z-20 w-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-700">
              <item.icon className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500">
              {item.title}
            </h3>
            
            <p className="text-muted-foreground text-xs leading-relaxed tracking-wide font-medium mb-10 max-w-[260px]">
              {item.description}
            </p>
            
            <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-primary transition-all duration-500">
              EXPLORE RESOURCE
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Subtle Background Icon */}
          <item.icon className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12" />
        </motion.div>
      ))}
    </div>
  );
};
