import React from "react";
import { Terminal, Cpu, Layout, ShoppingCart, Zap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Prompts",
    description: "Comandos otimizados para resultados superiores.",
    icon: Terminal,
    color: "from-orange-500/20 to-transparent",
  },
  {
    title: "Extensões",
    description: "Poder extra para o seu fluxo de trabalho.",
    icon: Zap,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Templates",
    description: "Estruturas prontas para deploy imediato.",
    icon: Layout,
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Automações",
    description: "Fluxos inteligentes que trabalham por você.",
    icon: Cpu,
    color: "from-green-500/20 to-transparent",
  },
  {
    title: "APIs",
    description: "Conectividade neural e integrações técnicas.",
    icon: ShoppingCart,
    color: "from-red-500/20 to-transparent",
  },
  {
    title: "Trilhas",
    description: "Conteúdo educativo e jornadas de aprendizado.",
    icon: BookOpen,
    color: "from-yellow-500/20 to-transparent",
  },
];

export const EcosystemGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative p-8 rounded-2xl bg-ui-surface border border-ui-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
              <item.icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-black uppercase tracking-tighter mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            
            <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
              Acessar Recurso <Zap className="ml-2 w-3 h-3" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
