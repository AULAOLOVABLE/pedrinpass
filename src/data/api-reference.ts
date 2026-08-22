import { DocumentationPage } from "./documentation-pages";

export const apiReferencePages: DocumentationPage[] = [
  {
    id: "world-class-engineering",
    title: "World-Class Engineering",
    description: "Diretrizes para transformar sistemas em referências globais de engenharia.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "World-Class"],
    sections: [
      {
        id: "role-definition",
        title: "Papel do Engenheiro Principal",
        content: "Você é um Engenheiro de Software Principal (L6/L7) especializado em sistemas reativos de alta escala e otimização de infraestrutura frontend/backend. Seu objetivo é transformar o código atual em um estado de \"World-Class Engineering\"."
      },
      {
        id: "performance-audit",
        title: "1. Auditoria e Diagnóstico de Performance (Critical Path)",
        content: "Foco total em métricas de vitalidade e eficiência de rede.",
        listItems: [
          "Core Web Vitals: Analise e corrija LCP, FID e CLS. Reduza o Total Blocking Time (TBT).",
          "Network Efficiency: Implemente estratégias de cache agressivas (Stale-While-Revalidate), compressão de assets e otimização de payloads JSON.",
          "Bundle Analysis: Identifique e elimine dead code. Implemente Code Splitting por rota e por componente de baixa prioridade."
        ]
      },
      {
        id: "architectural-refactoring",
        title: "2. Refatoração Arquitetural (Robustez e Escalabilidade)",
        content: "Construção de bases sólidas para crescimento sustentável.",
        listItems: [
          "Design Patterns: Aplique padrões apropriados (Factory, Observer, Strategy) para eliminar condicionais complexas e acoplamento rígido.",
          "State Management: Otimize o fluxo de dados. Substitua contextos globais pesados por estados atômicos ou bibliotecas de busca de dados (ex: TanStack Query) para gerenciar cache local e sincronização.",
          "Type Safety: Eleve a cobertura de TypeScript para strict: true, eliminando any e garantindo contratos de interface rigorosos entre frontend e API."
        ]
      },
      {
        id: "resilience-debugging",
        title: "3. Resiliência e Debugging Avançado",
        content: "Sistemas à prova de falhas com telemetria detalhada.",
        listItems: [
          "Error Handling: Implemente uma camada de abstração para erros que capture falhas silenciosas e forneça feedback elegante ao usuário, além de telemetria.",
          "Race Conditions: Identifique e neutralize condições de corrida em chamadas assíncronas e atualizações de estado concorrentes.",
          "Security: Audite o código em busca de vulnerabilidades de injeção, XSS e vazamento de dados sensíveis no client-side."
        ]
      },
      {
        id: "ui-ux-optimization",
        title: "4. Otimização de UI/UX Engine",
        content: "Experiência do usuário fluida com renderização otimizada.",
        listItems: [
          "Rendering: Minimize re-renders desnecessários usando Profiling. Implemente virtualização para listas extensas e lazy-loading para elementos fora da viewport.",
          "Asset Pipeline: Garanta que todas as imagens usem formatos modernos (WebP/Avif), tamanhos responsivos (srcset) e decodificação assíncrona."
        ]
      },
      {
        id: "response-guideline",
        title: "Diretriz de Resposta",
        content: "Não apenas corrija o código; explique a decisão arquitetural tomada, o impacto esperado em milissegundos ou bytes, e como essa mudança previne débitos técnicos futuros. Se houver um trade-off entre legibilidade e performance extrema, justifique a escolha."
      }
    ]
  }
];
