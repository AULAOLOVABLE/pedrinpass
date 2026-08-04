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
    date: "4 de nov. de 2025",
    badges: [
      { variant: "features", label: "Novos Recursos" },
      { variant: "improvements", label: "Melhorias" },
    ],
    sections: [
      {
        title: "Atualizações no Painel",
        items: [
          "O alternador de modo escuro agora está disponível em Configurações > Preferências.",
          "Os botões de exportação agora incluem os formatos csv, xlsx e json.",
          "A nova barra lateral quick_filters ajuda você a encontrar artigos mais rápido.",
        ],
      },
      {
        title: "Ferramentas para Desenvolvedores",
        items: [
          "O cabeçalho x-api-key foi padronizado em todos os endpoints da API.",
          "O help-cli agora suporta variáveis de ambiente com HELPCENTER_ENV.",
          "Códigos de erro da API atualizados: E-404 agora é ARTICLE_NOT_FOUND.",
        ],
      },
    ],
  },
  {
    date: "5 de out. de 2025",
    badges: [
      { variant: "fixes", label: "Correções" },
      { variant: "features", label: "Novos Recursos" },
    ],
    sections: [
      {
        title: "Novos Recursos de Solicitação de Conteúdo",
        items: [
          "Adicionado suporte para envio de solicitações de conteúdo públicas e privadas.",
          "Os links de conteúdo agora incluem parâmetros ?utm_source para rastreamento.",
          "Páginas de artigos aprimoradas com suporte a botões de favoritar e compartilhar.",
        ],
      },
      {
        title: "Melhorias na API",
        items: [
          "O article_id agora é retornado em todos os payloads de webhook.",
          "Agora você pode passar o cabeçalho x-preview-mode para visualizar conteúdo em rascunho.",
          "O campo export.pdf agora está incluído nas respostas de GET /exports.",
        ],
        code: {
          lines: [
            "POST /api/v1/content-requests",
            "{",
            '  "title": "Getting Started Guide",',
            '  "category": "tutorials",',
            '  "type": "public"',
            "}",
          ],
        },
      },
      {
        title: "Melhorias na Detecção de Busca",
        items: [
          "Introduzido o campo relevance_score na resposta de busca (baixa, média, alta).",
          "Adicionado user_preferences ao rastreamento de sessão para personalização.",
          "O cabeçalho x-search-rank agora está disponível nos callbacks de busca.",
        ],
      },
      {
        title: "Melhorias nas Categorias de Conteúdo",
        items: [
          "As categorias agora suportam nested_levels para organizar subcategorias.",
          "Você pode atualizar o category_order diretamente pela API.",
          "Adicionado archive_after_days para fluxos automáticos de arquivamento de conteúdo.",
        ],
      },
    ],
  },
  {
    date: "19 de set. de 2025",
    badges: [
      { variant: "improvements", label: "Melhorias" },
      { variant: "fixes", label: "Correções" },
    ],
    sections: [
      {
        title: "Controles de Exportação Aprimorados",
        items: [
          "Adicionado suporte para exportações agendadas (diárias, semanais ou mensais).",
          "Introduzidas retenções de exportação para conteúdo em revisão.",
          "Melhorada a vinculação multi-formato para alternar mais rápido entre tipos de exportação.",
        ],
      },
      {
        title: "Melhorias no Painel de Análises",
        items: [
          "Nova métrica de Visualizações de Artigos adicionada.",
          "Filtragem aprimorada por coorte de usuário e categoria de conteúdo.",
          "Os relatórios agora podem ser exportados em PDF, além de CSV e Excel.",
        ],
      },
      {
        title: "Atualizações para Desenvolvedores",
        items: [
          "Adicionado novo endpoint da API de Busca de Artigos.",
          "Limitação de taxa aprimorada com mensagens de erro mais claras.",
          "A lógica de repetição de webhook agora suporta backoff exponencial.",
        ],
      },
    ],
  },
  {
    date: "4 de set. de 2025",
    badges: [
      { variant: "features", label: "Novos Recursos" },
      { variant: "improvements", label: "Melhorias" },
    ],
    sections: [
      {
        title: "Novos Recursos",
        items: [
          "Suporte a Múltiplos Idiomas: agora você pode publicar conteúdo em vários idiomas (EN, ES, FR).",
          "Adicionada detecção automática de idioma com base nas configurações do navegador do usuário.",
          "Opção para definir um idioma de conteúdo padrão nas configurações da conta.",
        ],
      },
      {
        title: "Melhorias",
        items: [
          "Novas tentativas de busca com falha aprimoradas: o sistema agora tentará 3 vezes em até 7 segundos.",
          "Painel de análises otimizado para tempos de carregamento mais rápidos.",
        ],
      },
      {
        title: "Correções",
        items: [
          "Corrigido um problema em que artigos em rascunho apareciam incorretamente nos resultados de busca.",
          "Resolvido um bug que fazia os relatórios de visualização exibirem entradas duplicadas.",
        ],
      },
    ],
  },
];
