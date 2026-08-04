export interface ChangelogSection {
  title: string;
  items: string[];
  code?: {
    lines: string[];
  };
}

export interface ChangelogBadge {
  variant: "features" | "improvements" | "fixes";
  label: string;
}

export interface ChangelogEntryData {
  date: string;
  badges: ChangelogBadge[];
  sections: ChangelogSection[];
}

export const changelogData: ChangelogEntryData[] = [
  {
    date: "14 de ago. de 2026",
    badges: [
      { variant: "features", label: "Lançamento" },
      { variant: "improvements", label: "Premium" },
    ],
    sections: [
      {
        title: "Últimos Recursos",
        items: [
          "Novo Prompt Pack ChatGPT para Engenharia de Software.",
          "Template SaaS Lovable v2.0 lançado.",
          "Agente Comercial IA para automação de vendas.",
          "Workflow N8N para processamento de leads.",
          "Claude MCP: Novo servidor para busca local.",
        ],
      },
    ],
  },
  {
    date: "28 de jul. de 2026",
    badges: [
      { variant: "features", label: "Novas Extensões" },
      { variant: "improvements", label: "Database Update" },
    ],
    sections: [
      {
        title: "Banco de Dados de Extensões",
        items: [
          "Adicionadas 50 novas extensões para Chrome focadas em análise de dados.",
          "Novo servidor MCP para integração com bancos de dados SQL no Claude.",
          "Otimização da busca no marketplace para resultados instantâneos.",
          "Atualização dos pacotes de prompts para suporte ao Llama 3.1.",
        ],
      },
    ],
  },
  {
    date: "10 de jul. de 2026",
    badges: [
      { variant: "fixes", label: "Estabilidade" },
      { variant: "features", label: "Automações" },
    ],
    sections: [
      {
        title: "Workflows N8N",
        items: [
          "Lançamento do template de automação para suporte ao cliente via WhatsApp.",
          "Corrigido erro de sincronização em templates Lovable com Supabase.",
          "Melhoria no tempo de resposta do assistente de IA durante o streaming.",
        ],
      },
    ],
  },
];
