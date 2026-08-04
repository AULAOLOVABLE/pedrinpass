export interface DocumentationPage {
  id: string;
  title: string;
  description: string;
  category: string;
  breadcrumb: string[];
  sections: {
    id: string;
    title: string;
    level?: "h2" | "h3";
    content: string;
    listItems?: string[];
    orderedList?: boolean;
  }[];
}

export const documentationPages: DocumentationPage[] = [
  {
    id: "overview",
    title: "Plataforma PedrinTEC",
    description: "Visão geral do ecossistema PedrinTEC para desenvolvedores e entusiastas de IA.",
    category: "Geral",
    breadcrumb: ["Geral", "Visão Geral"],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content: "A PedrinTEC é um ecossistema integrado para a próxima geração de desenvolvedores. Unificamos automação, inteligência e colaboração em uma interface fluida, permitindo que você construa, automatize e dimensione projetos com IA."
      },
      {
        id: "features",
        title: "Principais Recursos",
        content: "Nossa plataforma oferece ferramentas essenciais para acelerar o desenvolvimento:",
        listItems: [
          "Agentes de IA autônomos para tarefas complexas.",
          "Marketplace de Prompts Premium.",
          "Templates prontos para produção.",
          "Workflows automatizados via N8N.",
          "Integrações nativas com ChatGPT, Claude e Cursor."
        ]
      },
      {
        id: "popular",
        title: "Conteúdos Populares",
        content: "Explore os recursos mais acessados pela comunidade:",
        listItems: [
          "Guia de início rápido para Lovable.",
          "Automação de leads com N8N.",
          "Prompts estratégicos para Landing Pages."
        ]
      }
    ]
  },
  {
    id: "extensions",
    title: "Extensões",
    description: "Amplie o poder do seu ambiente de desenvolvimento.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Extensões"],
    sections: [
      {
        id: "getting-started",
        title: "Introdução às Extensões",
        content: "As extensões PedrinTEC permitem que você adicione novas funcionalidades ao seu editor, terminal ou navegador, integrando o ecossistema diretamente ao seu fluxo de trabalho."
      },
      {
        id: "dev-extensions",
        title: "Desenvolvimento",
        content: "Extensões para acelerar seu código:",
        listItems: [
          "PedrinTEC Analyzer: Análise profunda de código com IA.",
          "DB Visualizer: Gerencie seu Supabase com facilidade.",
          "Code Formatter Pro: Padrões de estilo automáticos."
        ]
      },
      {
        id: "ia-extensions",
        title: "Inteligência Artificial",
        content: "Ferramentas de IA integradas:",
        listItems: [
          "LLM Connector: Conecte qualquer modelo ao seu app.",
          "Prompt Helper: Assistente de escrita de prompts.",
          "Vector Search Engine: Busca semântica simplificada."
        ]
      }
    ]
  },
  {
    id: "prompts",
    title: "Prompts Premium",
    description: "Sequência estratégica de prompts para resultados de alta performance.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Prompts"],
    sections: [
      {
        id: "sequence",
        title: "Sequência Estratégica",
        content: "Nossa metodologia de Prompts Premium segue uma ordem lógica para garantir a melhor resposta da IA.",
        listItems: [
          "Contextualização (Atuação).",
          "Especificação (O que fazer).",
          "Restrição (O que não fazer).",
          "Refinamento (Iteração)."
        ]
      },
      {
        id: "categories",
        title: "Categorias de Prompts",
        content: "Escolha a categoria que melhor atende sua necessidade atual:",
        listItems: [
          "Criação de sites e Landing Pages.",
          "UI/UX Design e Prototipação.",
          "Desenvolvimento e Refatoração de Código.",
          "Marketing e Copywriting Persuasivo."
        ]
      }
    ]
  },
  {
    id: "templates",
    title: "Templates",
    description: "Acelere seu projeto com estruturas prontas para produção.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Templates"],
    sections: [
      {
        id: "overview",
        title: "Templates PedrinTEC",
        content: "Nossos templates são otimizados para performance, acessibilidade e SEO, utilizando as melhores práticas de desenvolvimento moderno."
      },
      {
        id: "saas",
        title: "SaaS e Dashboards",
        content: "Estruturas completas para seu próximo produto:",
        listItems: [
          "Dashboard Administrativo Premium.",
          "Sistema de Gestão SaaS.",
          "CRM Minimalista."
        ]
      }
    ]
  },
  {
    id: "workflows",
    title: "Workflows",
    description: "Automações visuais para processos complexos.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Workflows"],
    sections: [
      {
        id: "intro",
        title: "Automação com Workflows",
        content: "Conecte ferramentas e crie fluxos que trabalham sozinhos. Ideal para marketing, vendas e suporte."
      },
      {
        id: "examples",
        title: "Fluxos Disponíveis",
        content: "Exemplos de automações prontas para importar:",
        listItems: [
          "Geração automática de Landing Pages.",
          "Captação e qualificação de Leads.",
          "Suporte via WhatsApp com IA."
        ]
      }
    ]
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    description: "Guia avançado para uso do ChatGPT na PedrinTEC.",
    category: "Ferramentas",
    breadcrumb: ["Ferramentas", "ChatGPT"],
    sections: [
      {
        id: "structure",
        title: "Estrutura de Prompts",
        content: "Aprenda a criar prompts que o GPT entenda perfeitamente.",
        listItems: [
          "Use a técnica 'Act as...'",
          "Defina limites claros.",
          "Solicite formatos específicos (JSON, Markdown)."
        ]
      }
    ]
  },
  {
    id: "lovable",
    title: "Lovable",
    description: "Construa apps incríveis em minutos com Lovable.",
    category: "Ferramentas",
    breadcrumb: ["Ferramentas", "Lovable"],
    sections: [
      {
        id: "creation",
        title: "Criação de Projetos",
        content: "Como iniciar seu primeiro projeto no Lovable com as melhores práticas de design e código."
      }
    ]
  },
  {
    id: "claude",
    title: "Claude",
    description: "Uso estratégico do Claude para análise e desenvolvimento.",
    category: "Ferramentas",
    breadcrumb: ["Ferramentas", "Claude"],
    sections: [
      {
        id: "analysis",
        title: "Análise de Documentos",
        content: "Como usar a janela de contexto expandida do Claude para analisar projetos inteiros."
      }
    ]
  },
  {
    id: "cursor",
    title: "Cursor",
    description: "Desenvolvimento assistido por IA com o editor Cursor.",
    category: "Ferramentas",
    breadcrumb: ["Ferramentas", "Cursor"],
    sections: [
      {
        id: "setup",
        title: "Configuração Inicial",
        content: "Otimizando o Cursor para o ecossistema PedrinTEC e integração com IA."
      }
    ]
  }
];

export const generateTableOfContents = (page: DocumentationPage) => {
  const toc: { id: string; title: string; level: "h2" | "h3" }[] = [];
  if (page.sections) {
    page.sections.forEach(section => {
      toc.push({ id: section.id, title: section.title, level: section.level || "h2" });
    });
  }
  return toc;
};
