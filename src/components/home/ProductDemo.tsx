import React from "react";
import { motion } from "framer-motion";
import { Terminal, Play, CheckCircle2, MessageSquare, Zap, Layers, Globe, Cpu } from "lucide-react";
import { LightSweep } from "../effects/LightSweep";

export const ProductDemo = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 block mb-6 animate-pulse">
              System Interface
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
              Do Conceito <br />
              <span className="text-primary">ao Deploy.</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed mb-12 tracking-wide">
              A PedrinTEC unifica o ciclo de vida do desenvolvimento de software em uma interface singular, otimizada para performance neural e execução em tempo real.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Layers, text: "Arquitetura Modular", desc: "Componentes isolados e prontos." },
                { icon: Zap, text: "Performance Extrema", desc: "Otimizado para baixa latência." },
                { icon: Globe, text: "Escala Global", desc: "Pronto para tráfego massivo." },
                { icon: CheckCircle2, text: "IA Validada", desc: "Prompts testados e seguros." },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/90">{item.text}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter pl-8 opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            {/* Main Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -5, rotateX: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className="glass-premium relative aspect-video shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <LightSweep />
              
              {/* Fake Window Header */}
              <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">pedrintec-neural-workspace</div>
                <div className="w-3 h-3" />
              </div>

              {/* Main Content Area */}
              <div className="p-8 h-full flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-32 bg-primary/20 rounded-full" />
                  <div className="h-6 w-20 bg-primary rounded flex items-center justify-center text-[8px] font-black text-primary-foreground">STATUS: LIVE</div>
                </div>
                
                <div className="flex-1 grid grid-cols-12 gap-6">
                  <div className="col-span-4 space-y-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-8 w-full bg-white/5 border border-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                  <div className="col-span-8 bg-black/60 rounded-xl border border-white/5 p-6 font-mono text-[9px] text-primary/80 relative overflow-hidden">
                    <div className="space-y-2 mb-8">
                      <p className="opacity-50 tracking-widest">{`[INITIALIZING NEURAL_CORE]`}</p>
                      <p className="text-primary tracking-widest animate-pulse">{`LOADING DATASETS... [OK]`}</p>
                      <p className="opacity-50 tracking-widest">{`SYNCING NODES... [OK]`}</p>
                      <p className="tracking-widest">{`ESTABLISHING SECURE_TUNNEL...`}</p>
                    </div>
                    
                    <div className="h-32 w-full bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-center overflow-hidden">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-20 h-20 bg-primary/10 rounded-full blur-2xl"
                      />
                      <Zap className="w-8 h-8 text-primary animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Decorations */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-32 h-32 glass-premium flex items-center justify-center z-20 shadow-[0_0_50px_rgba(255,106,26,0.2)]"
            >
              <Cpu className="w-10 h-10 text-primary animate-pulse" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 px-6 py-4 glass-premium z-20 flex items-center gap-3 shadow-[0_0_50px_rgba(255,106,26,0.2)]"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[8px] font-black uppercase tracking-widest">Global Sync Active</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

