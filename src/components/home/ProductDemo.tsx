import React from "react";
import { motion } from "framer-motion";
import { Terminal, Play, CheckCircle2, MessageSquare } from "lucide-react";

export const ProductDemo = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">Produto em Ação</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Transforme <span className="text-primary">Ideias</span> em Interfaces <span className="text-primary">Reais</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-10">
              Nosso ecossistema não é apenas uma biblioteca. É uma engine de execução onde IA e Código se encontram para acelerar seu deploy.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Terminal, text: "Editor de prompts otimizado" },
                { icon: MessageSquare, text: "Assistente IA contextual" },
                { icon: CheckCircle2, text: "Deploy automatizado em um clique" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-tight text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Mockup Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-video rounded-3xl bg-ui-surface border border-ui-border shadow-2xl overflow-hidden group"
            >
              {/* Header */}
              <div className="h-10 bg-ui-border/50 border-b border-ui-border flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="mx-auto text-[10px] font-mono text-muted-foreground">pedrintec.app/workspace</div>
              </div>

              {/* Content Preview */}
              <div className="p-6 grid grid-cols-12 gap-6 h-full">
                <div className="col-span-4 space-y-4">
                  <div className="h-4 w-full bg-primary/10 rounded-full animate-pulse" />
                  <div className="h-4 w-2/3 bg-ui-border rounded-full" />
                  <div className="h-32 w-full bg-ui-border/30 rounded-2xl border border-ui-border/50" />
                </div>
                <div className="col-span-8 bg-black/40 rounded-2xl border border-ui-border/50 p-4 font-mono text-[10px] text-primary/70 overflow-hidden relative">
                  <div className="flex items-center gap-2 mb-4 border-b border-ui-border/30 pb-2">
                    <Play className="w-3 h-3" /> <span>EXECUTE_WORKFLOW.SH</span>
                  </div>
                  <div className="space-y-2">
                    <p className="">{`> initializing neural core...`}</p>
                    <p className="">{`> loading components...`}</p>
                    <p className="text-primary">{`> build success: deploy ready.`}</p>
                    <div className="h-24 w-full bg-primary/5 rounded border border-primary/20 mt-4" />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-black text-[8px] uppercase tracking-widest shadow-xl"
                  >
                    AI Active
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
