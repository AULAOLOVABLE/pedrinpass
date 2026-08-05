import { motion } from "framer-motion";
import { TrendingUp, Activity, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";
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
    <section className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-3">
          <span className="eyebrow">Monitoramento</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            <WaveText text="Dashboard de Decisão" staggerDelay={0.01} />
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Metrics */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="mt-2 text-2xl font-black text-foreground">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    stat.trendUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {stat.trend}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Decision Area / Trends */}
            <motion.div 
              className="md:col-span-3 bento-card p-6 overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  Fluxo de Decisão Recomendado
                </h3>
                <span className="text-[10px] uppercase tracking-tighter text-muted-foreground bg-white/5 px-2 py-1 rounded">
                  Filtro: Últimas 24h
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary-foreground">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Otimizar Checkout Mobile</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Ações recomendadas: Reduzir campos obrigatórios e habilitar Apple Pay. Impacto esperado: +R$ 12k/mês.
                    </p>
                  </div>
                  <button className="ml-auto p-2 rounded-full hover:bg-primary/20 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-muted-foreground">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Escalar Campanha IA</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      CPC atual R$ 0,45. ROAS de 4.8. Recomenda-se aumentar orçamento em 20%.
                    </p>
                  </div>
                  <button className="ml-auto p-2 rounded-full hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Insights / Bottlenecks */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-[-12px] px-2">
              Insights Críticos
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
                      <h4 className="text-sm font-bold text-foreground">{insight.title}</h4>
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
    </section>
  );
};

export default Dashboard;
