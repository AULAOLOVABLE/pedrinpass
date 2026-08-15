import { motion } from "framer-motion";
import { TrendingUp, Activity, AlertCircle, CheckCircle2, ChevronRight, Search, Bell } from "lucide-react";
import WaveText from "@/components/ui/wave-text";

const stats = [
  {
    label: "Receita Mensal",
    value: "R$ 124.500",
    trend: "+12.5%",
    trendUp: true,
    description: "n=12k clientes",
  },
  {
    label: "Conversão",
    value: "3.2%",
    trend: "-0.4%",
    trendUp: false,
    description: "Meta: 4.0%",
  },
  {
    label: "Sessões Ativas",
    value: "1,284",
    trend: "+18%",
    trendUp: true,
    description: "Agora",
  },
];

const insights = [
  {
    icon: CheckCircle2,
    color: "text-green-500",
    title: "Performance Estável",
    description: "LCP abaixo de 1.2s em 98% das requisições.",
  },
  {
    icon: AlertCircle,
    color: "text-amber-500",
    title: "Gargalo no Checkout",
    description: "Queda de 15% na etapa de pagamento mobile.",
  },
  {
    icon: TrendingUp,
    color: "text-primary",
    title: "Tendência de Alta",
    description: "Busca por 'Agentes IA' cresceu 40% hoje.",
  },
];

const Dashboard = () => {
  return (
    <section className="px-4 md:px-8 py-6">
      <div className="max-w-full">
        {/* Header Section from Image Reference */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight text-white">Dashboard</h2>
            <p className="text-sm text-muted-foreground">Ter, 06 Ago 2026</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <button className="hover:text-primary transition-colors"><Search className="w-5 h-5" /></button>
              <button className="hover:text-primary transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
              </button>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 shadow-lg shadow-primary/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Metrics Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bento-card p-6 flex flex-col justify-between group active:scale-[0.98] transition-all"
                >
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      {stat.label}
                    </span>
                    <div className="mt-3 text-4xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter">
                      {stat.value}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between relative z-10">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${
                      stat.trendUp 
                        ? 'bg-green-500/5 text-green-500 border-green-500/20' 
                        : 'bg-red-500/5 text-red-500 border-red-500/20'
                    }`}>
                      {stat.trend}
                    </span>
                    <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden border border-white/5">
                       <motion.div 
                        className="h-full bg-primary shadow-[0_0_10px_rgba(255,107,74,0.5)]" 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                       />
                    </div>
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-700" />
                </motion.div>
              ))}
            </div>

            {/* Main Project Table / List */}
            <motion.div 
              className="bento-card p-8 border-ui-border hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">Projetos Ativos</h3>
                <button className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                  Ver todos <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              <div className="space-y-6">
                {[
                  { name: "Neural Interface V2", tasks: 42, status: "Em progresso", statusColor: "text-amber-500" },
                  { name: "Quantum Bot Extension", tasks: 12, status: "Finalizado", statusColor: "text-green-500" },
                  { name: "Data Matrix Core", tasks: 8, status: "Pendente", statusColor: "text-blue-500" }
                ].map((project, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                        <Activity className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{project.name}</h4>
                        <p className="text-xs text-muted-foreground">{project.tasks} tarefas mapeadas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${project.statusColor}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                          <Activity className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Insights & Actions Side Panel */}
          <div className="space-y-6">
             <div className="bento-card p-6 bg-primary/5 border-primary/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               </div>
                <h3 className="font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  Próxima Recomendação
                </h3>
               <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                 Otimize o tempo de resposta da API para reduzir o churn em 12%.
               </p>
                <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.95] transition-all shadow-xl shadow-primary/20 border border-primary/20">
                  Executar Otimização
                </button>
             </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">
                Alertas de Sistema
              </h3>
              {insights.map((insight, i) => {
                const Icon = insight.icon;
                return (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="bento-card p-5 group transition-all hover:border-primary/40"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-xl bg-background border border-border group-hover:border-primary/20`}>
                        <Icon className={`w-5 h-5 ${insight.color}`} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground">{insight.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
