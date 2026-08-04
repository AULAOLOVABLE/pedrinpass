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
      { variant: "features", label: "Marketplace" },
      { variant: "improvements", label: "Premium Content" },
    ],
    sections: [
      {
        title: "Lançamento do Ecossistema Completo",
        items: [
          "Preenchimento integral de Documentação, Prompts e Templates.",
          "Nova rota de API Connect com exemplos interativos.",
          "Sistema de busca global otimizado com atalhos Command+K.",
          "Interface responsiva aprimorada para dispositivos mobile.",
          "Novos pacotes de Prompts Premium para Lovable e ChatGPT."
        ],
      },
    ],
  },
  {
    date: "05 de ago. de 2026",
    badges: [
      { variant: "improvements", label: "Visual 2027" },
      { variant: "fixes", label: "Performance" },
    ],
    sections: [
      {
        title: "Padrão Visual Futuro",
        items: [
          "Implementação da estética premium com tipografia Space Grotesk.",
          "Otimização de carregamento com lazy loading em todas as rotas.",
          "Novos efeitos de Matrix Rain e microinterações fluidas.",
          "Correção de bugs na navegação lateral da documentação."
        ],
      },
    ],
  },
];
