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
          "Code Formatter Pro: Padrões de estilo automáticos.",
          "V3 Extension Optimizer: Redução de polling, chamadas de storage, listeners duplicados, objetos grandes e permissões desnecessárias. Mantém o service worker stateless.",
          "Debug System Pro: Faça debug sistemático. Reproduza o problema, identifique a primeira falha observável, diferencie sintoma de causa raiz, analise logs, rede, estado e dependências e aplique a menor correção confiável.",
          "Performance Engine: Otimização de JavaScript inicial, dependências, code splitting, lazy loading, cache, mídia e renderizações. Priorize LCP, INP e CLS sem sacrificar acessibilidade."
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
        id: "demo-ready",
        title: "Demo Engine",
        content: "Prepare o produto para uma demonstração comercial forte. Use dados realistas, estados completos, narrativa visual, restauração de dados demo e fluxo demonstrável em menos de três minutos."
      },
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
  },
  {
    id: "motion-design",
    title: "Sistema de Motion Design",
    description: "Framework de animação reutilizável para a plataforma PedrinTEC.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "Motion Design"],
    sections: [
      {
        id: "tokens",
        title: "Tokens de Movimento",
        content: "Definições semânticas para garantir consistência visual em toda a interface.",
        listItems: [
          "Duração: Fast (120ms), Normal (200ms), Slow (400ms).",
          "Easing: Cubic-bezier(0.25, 0.1, 0.25, 1).",
          "Distância: Reveal (20px), Parallax (40px).",
          "Escala: Active (0.95), Hover (1.02).",
          "Blur: Glass (12px), Focus (4px)."
        ]
      },
      {
        id: "components",
        title: "Componentes Disponíveis",
        content: "Crie um sistema de motion design reutilizável para a aplicação. Defina tokens de duração, easing, distância, escala, blur e stagger; componentes para Reveal, Stagger, Parallax, MagneticButton, TiltCard, Marquee, PageTransition e ScrollProgress; hooks com cleanup; suporte a prefers-reduced-motion; limites para mobile; e documentação curta de uso. Use Motion for React para layout e microinterações, GSAP para timelines complexas e CSS para animações simples. Evite bibliotecas duplicadas e preserve todas as funcionalidades existentes.",
        listItems: [
          "Reveal: Entrada suave de elementos com direção controlada.",
          "Stagger: Cascata de animações para listas.",
          "MagneticButton: Botões que atraem o cursor do usuário.",
          "TiltCard: Interação 3D baseada no movimento do mouse.",
          "PageTransition: Transições fluidas entre rotas."
        ]
      },
      {
        id: "best-practices",
        title: "Melhores Práticas",
        content: "Diretrizes para manter a performance e acessibilidade:",
        listItems: [
          "Sempre use transform e opacity para animações suaves via GPU.",
          "Respeite o hook useReducedMotion para acessibilidade.",
          "Evite animações persistentes em dispositivos móveis para poupar bateria.",
          "Limpe listeners de GSAP e Scroll no cleanup dos componentes."
        ]
      }
    ]
  }
  ,
  {
    id: "portfolio-cinematografico",
    title: "Portfólio Cinematográfico",
    description: "Crie uma experiência completa no formato “Portfólio Cinematográfico” para a PedrinTEC.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "Portfólio"],
    sections: [
      {
        id: "visual-direction",
        title: "Direção Visual",
        content: "High-End Motion Design com foco em narrativa orientada ao produto. O objetivo é criar um impacto visual imediato que comunique sofisticação técnica e atenção aos detalhes.",
        listItems: [
          "WebGL Gallery: Galeria imersiva com distorção de shader no hover.",
          "Kinetic Typography: Tipografia dinâmica que reage ao scroll com intensidade 78%.",
          "Transições de Página: Morphing entre estados de visualização.",
          "Feedback Tátil: Microinterações baseadas em física real."
        ]
      },
      {
        id: "technical-spec",
        title: "Especificação Técnica",
        content: "Implementação robusta focada em performance e compatibilidade.",
        listItems: [
          "Carregamento progressivo de texturas via instanced meshes.",
          "Fallback sem WebGL: Layout estático otimizado para SEO.",
          "Checklist de Performance: 60fps constantes em mobile, LCP < 1.5s.",
          "Acessibilidade: Suporte completo a leitores de tela em elementos interativos."
        ]
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
