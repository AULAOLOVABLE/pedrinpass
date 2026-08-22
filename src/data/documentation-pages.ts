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
      }
    ]
  },
  {
    id: "premium-prompts",
    title: "Prompts Premium",
    description: "Sequência estratégica de prompts para resultados de alta performance.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Prompts Premium"],
    sections: [
      {
        id: "prompts-list",
        title: "Catálogo de Prompts",
        content: "Abaixo estão os prompts estruturados para máxima eficiência em suas tarefas diárias:",
        listItems: [
          "Engenheiro Principal (L6/L7): Transforme código em World-Class Engineering.",
          "Especialista em Interfaces: Refatoração para responsividade 100%.",
          "Arquiteto de Performance: Otimização de Web Vitals e renderização.",
          "Master Copywriter: Criação de landing pages persuasivas com foco em CRO.",
          "Prompt de Refatoração: Aplicação de SOLID, Clean Code e redução de complexidade.",
          "Especialista em N8N: Automações complexas e integração de APIs.",
          "Growth Hacker AI: Estratégias de escala e aquisição automatizada.",
          "DevOps Architect: CI/CD, Docker e orquestração de microserviços.",
          "Security Auditor: Identificação de brechas e hardening de aplicações.",
          "Data Scientist Prompt: Limpeza de dados, análise preditiva e visualização.",
          "Mobile App Expert: React Native e Flutter optimization prompts.",
          "Backend Lead: Node.js, Go e Python architecture patterns.",
          "Cloud Specialist: AWS, Azure e GCP infrastructure as code.",
          "Testing Engineer: Unit, Integration e E2E testing strategies.",
          "UI Designer AI: Design tokens, acessibilidade e componentes premium."
        ]
      },
      {
        id: "sequence",
        title: "Metodologia de Sequência",
        content: "Nossa metodologia segue uma ordem lógica para garantir a melhor resposta da IA:",
        listItems: [
          "1. Atuação (Persona/Contexto).",
          "2. Especificação (Objetivo claro).",
          "3. Restrição (O que evitar).",
          "4. Refinamento (Iteração contínua).",
          "5. Formatação (Saída desejada: JSON, Markdown, Code)."
        ]
      },
      {
        id: "copy-instruction",
        title: "Como usar",
        content: "Selecione o prompt desejado no marketplace ou no assistente lateral, copie o conteúdo e utilize no seu modelo de IA preferido (ChatGPT, Claude ou Gemini)."
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
        content: "As extensões PedrinTEC permitem que você adicione novas funcionalidades ao seu editor, terminal ou navegador."
      },
      {
        id: "dev-extensions",
        title: "Desenvolvimento",
        content: "Extensões para acelerar seu código:",
        listItems: [
          "PedrinTEC Analyzer: Análise profunda de código com IA.",
          "DB Visualizer: Gerencie seu Supabase com facilidade.",
          "Code Formatter Pro: Padrões de estilo automáticos.",
          "V3 Extension Optimizer: Redução de overhead em service workers."
        ]
      }
    ]
  },
  {
    id: "prompts",
    title: "Documentação de Prompts",
    description: "Entenda a lógica por trás da criação de prompts de alta performance.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Documentação"],
    sections: [
      {
        id: "logic",
        title: "Lógica de Escrita",
        content: "A qualidade da saída da IA é diretamente proporcional à qualidade do prompt. Foque em ser específico e fornecer contexto."
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
    id: "consultoria-executiva",
    title: "Consultoria Executiva",
    description: "Crie uma experiência completa no formato “Produto Tecnológico”. Tipo: Produto. Direção visual: Interactive Product Visualization. Combine Product Transformation Animation, Exploded View Animation, Object Rotation on Scroll com intensidade 76% e prioridade em produto. Stack: React + TypeScript + R3F + Drei. Estruture a página como uma narrativa orientada ao produto, com hero, demonstração, benefícios, prova, objeções, CTA e estados responsivos. Preserve todas as funcionalidades existentes. Use componentes React + TypeScript reutilizáveis, tokens de motion, carregamento progressivo, acessibilidade, prefers-reduced-motion, fallback sem WebGL e nível de qualidade adaptativo. Não copie marcas ou assets de referências; traduza apenas os princípios de composição e movimento. Entregue implementação funcional, dependências necessárias e checklist de performance.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "Consultoria"],
    sections: [
      {
        id: "visual-direction",
        title: "Direção Visual",
        content: "Minimal Premium Interface com foco em clareza absoluta e microinterações de alta precisão (38% de intensidade). A narrativa é orientada ao produto, guiando o usuário através de uma jornada sofisticada e funcional.",
        listItems: [
          "Masked Text Reveal: Revelação de texto elegante para títulos de impacto.",
          "Parallax Image Gallery: Profundidade visual sem comprometer a performance.",
          "Microinteractions: Respostas táteis discretas mas perceptíveis.",
          "Narrativa de Produto: Fluxo lógico do hero ao CTA final."
        ]
      },
      {
        id: "technical-spec",
        title: "Especificação Técnica",
        content: "Stack moderna e resiliente para uma entrega impecável.",
        listItems: [
          "React + TypeScript + Motion: Base técnica de alta confiabilidade.",
          "Carregamento Progressivo: Priorização de recursos críticos para LCP otimizado.",
          "Acessibilidade Premium: WCAG 2.2 e suporte a leitores de tela nativo.",
          "Performance Adaptativa: Nível de qualidade ajustado ao dispositivo do usuário."
        ]
      }
    ]
  },
  {
    id: "refatoracao-completa",
    title: "Refatoração Completa",
    description: "Analise a estrutura do código e proponha uma refatoração completa para torná-lo mais limpo, modular e seguindo os princípios SOLID e Clean Code. Reduza a complexidade ciclomática e melhore a legibilidade e manutenibilidade sem alterar a funcionalidade original.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "Refatoração"],
    sections: [
      {
        id: "analise-modular",
        title: "Análise de Modularidade",
        content: "A desconstrução do monólito em módulos independentes é o primeiro passo para uma escala sustentável. Avaliamos a coesão e o acoplamento para garantir que cada componente tenha uma única responsabilidade clara.",
        listItems: [
          "Identificação de domínios isoláveis.",
          "Extração de lógica de negócio para Hooks personalizados.",
          "Padronização de interfaces de comunicação entre módulos.",
          "Eliminação de dependências circulares."
        ]
      },
      {
        id: "qualidade-codigo",
        title: "Qualidade e Manutenibilidade",
        content: "Aplicação rigorosa de padrões para um código que se documenta sozinho e resiste ao tempo.",
        listItems: [
          "Redução da Complexidade Ciclomática via guard clauses.",
          "Implementação de SOLID (especialmente Inversão de Dependência).",
          "Refatoração seguindo os princípios de Clean Code (Nomes significativos, funções pequenas).",
          "Checklist de Code Review automatizado."
        ]
      }
    ]
  },
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
  ,
  {
    id: "interfaces-adaptativas",
    title: "Especialista em Interfaces Adaptativas",
    description: "Refatoração de estrutura para responsividade 100%, garantindo experiência nativa em qualquer resolução.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "Mobile-First"],
    sections: [
      {
        id: "missao",
        title: "Missão",
        content: "Você é um Especialista em Interfaces Adaptativas com foco em acessibilidade e performance mobile. Sua missão é refatorar a estrutura de uma página para que ela seja 100% responsiva, garantindo uma experiência nativa em qualquer resolução, de relógios inteligentes a monitores ultrawide."
      },
      {
        id: "mobile-first",
        title: "1. Estratégia \"Mobile-First\" e Arquitetura Fluida",
        content: "Reestruture o código priorizando dispositivos móveis e layouts bidimensionais complexos.",
        listItems: [
          "Refatoração CSS/Tailwind: Reestruture o código priorizando dispositivos móveis. Use unidades relativas (rem, em, vh, vw, %) em vez de valores fixos (px).",
          "Layout Engine: Implemente CSS Grid para layouts bidimensionais complexos e Flexbox para componentes unidimensionais, garantindo que o conteúdo se ajuste organicamente ao container pai.",
          "Fluid Typography: Utilize funções como clamp() para que fontes e espaçamentos escalem suavemente entre breakpoints, eliminando degraus visuais bruscos."
        ]
      },
      {
        id: "assets-media",
        title: "2. Otimização de Assets e Mídia",
        content: "Implemente aspect-ratio e breakpoints estratégicos para integridade visual.",
        listItems: [
          "Imagens Adaptativas: Implemente aspect-ratio para evitar saltos de layout (CLS). Configure object-fit: cover/contain e garanta que imagens pesadas sejam redimensionadas ou ocultadas em telas menores.",
          "Breakpoints Estratégicos: Não foque apenas em dispositivos comuns (iPhone/Pixel). Crie breakpoints baseados no \"ponto de quebra\" do conteúdo, garantindo integridade visual em resoluções intermediárias (tablets em modo paisagem, dobráveis)."
        ]
      },
      {
        id: "ergonomia-touch",
        title: "3. Ergonomia e Interação Touch",
        content: "Garanta usabilidade em dispositivos móveis sem comprometer o desktop.",
        listItems: [
          "Touch Targets: Garanta que todos os elementos clicáveis tenham uma área mínima de 44x44px.",
          "Interações de Dispositivo: Ajuste estados de hover para não serem disparados acidentalmente no toque. Implemente menus hamburger ou bottom bars intuitivos para mobile sem comprometer a versão desktop.",
          "Overflow Control: Identifique e corrija qualquer \"scroll horizontal\" indesejado, garantindo que o viewport seja respeitado rigorosamente."
        ]
      },
      {
        id: "componentes-complexos",
        title: "4. Resiliência de Componentes Complexos",
        content: "Transforme elementos pesados em estruturas flexíveis.",
        listItems: [
          "Data Tables: Transforme tabelas complexas em cards empilháveis ou implemente containers com scroll horizontal controlado em telas pequenas.",
          "Modais e Overlays: Garanta que diálogos ocupem a tela cheia em mobile com scroll interno, evitando que o fundo da página role simultaneamente."
        ]
      },
      {
        id: "execucao",
        title: "Instrução de Execução",
        content: "Analise o código atual e identify elementos com larguras fixas ou posicionamento absoluto que quebram o layout. Entregue a versão refatorada com comentários técnicos sobre a hierarquia visual adotada e como a legibilidade foi preservada em cada nível de largura."
      }
    ]
  },
  {
    id: "growth-hacking",
    title: "Growth Hacking AI",
    description: "Estratégias avançadas de crescimento escaladas por inteligência artificial.",
    category: "Marketing",
    breadcrumb: ["Marketing", "Growth"],
    sections: [
      {
        id: "intro",
        title: "Growth com IA",
        content: "O Growth Hacking moderno não é apenas sobre criativos; é sobre automação de funis e experimentação em massa guiada por dados.",
        listItems: [
          "Automação de Cold Outreach: Gere mensagens personalizadas em escala.",
          "Lead Scoring Preditivo: Priorize leads com maior probabilidade de conversão.",
          "A/B Testing Automatizado: Use IA para gerar variantes de copy e design.",
          "SEO Programático: Crie milhares de páginas otimizadas com conteúdo de qualidade."
        ]
      }
    ]
  },
  {
    id: "devops-cicd",
    title: "DevOps & Automação CI/CD",
    description: "Infraestrutura moderna e entrega contínua para projetos de alta escala.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "DevOps"],
    sections: [
      {
        id: "cicd",
        title: "Pipeline de Entrega",
        content: "Garanta que seu código chegue em produção de forma segura e rápida.",
        listItems: [
          "GitHub Actions: Workflows para build, test e deploy automático.",
          "Dockerization: Containerize sua aplicação para ambientes consistentes.",
          "Terraform (IaC): Provisionamento de infraestrutura como código.",
          "Monitoramento e Logging: Datadog, Sentry e Prometheus."
        ]
      }
    ]
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Hardening",
    description: "Proteção avançada contra ameaças modernas e conformidade de dados.",
    category: "Engenharia",
    breadcrumb: ["Engenharia", "Segurança"],
    sections: [
      {
        id: "hardening",
        title: "Segurança de Aplicação",
        content: "Blindagem técnica para evitar invasões e vazamentos.",
        listItems: [
          "OWASP Top 10: Prevenção contra as vulnerabilidades mais comuns.",
          "Autenticação Multifator (MFA): Camadas extras de segurança.",
          "Criptografia de Dados: Repouso e trânsito (AES-256, TLS 1.3).",
          "Pentesting com IA: Use modelos para simular ataques e encontrar falhas."
        ]
      }
    ]
  },
  {
    id: "advanced-n8n",
    title: "N8N Avançado",
    description: "Construção de fluxos complexos e integração profunda de sistemas.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "N8N"],
    sections: [
      {
        id: "nodes",
        title: "Nós e Funções Customizadas",
        content: "Vá além dos nós básicos e crie automações inteligentes.",
        listItems: [
          "Code Node (JS/Python): Lógica complexa dentro do workflow.",
          "Webhook Triggers: Integre qualquer serviço externo.",
          "Error Trigger: Tratamento de falhas e retentativas automáticas.",
          "Data Transformation: Manipulação avançada de JSON e XML."
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
