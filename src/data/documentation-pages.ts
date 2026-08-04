export interface DocPageContent {
  title: string;
  description: string;
  breadcrumb: string[];
  sections: DocPageSection[];
}

export interface DocPageSection {
  id: string;
  title: string;
  level: "h2" | "h3";
  content: string;
  listItems?: string[];
  orderedList?: boolean;
}

export const documentationPages: Record<string, DocPageContent> = {
  extensions: {
    title: "Biblioteca de Extensões",
    description: "Explore nossa curadoria de extensões para turbinar sua IA.",
    breadcrumb: ["Marketplace", "Extensões"],
    sections: [
      {
        id: "chatgpt-extensions",
        title: "Extensões para ChatGPT",
        level: "h2",
        content: "Melhore sua experiência no ChatGPT com plugins e extensões que adicionam funcionalidades de busca em tempo real, análise de dados avançada e integração com ferramentas externas."
      },
      {
        id: "chrome-extensions",
        title: "Google Chrome",
        level: "h2",
        content: "Nossas extensões para Chrome permitem que você utilize o poder da IA diretamente em qualquer página da web, facilitando resumos, traduções e automação de tarefas no navegador."
      },
      {
        id: "vscode-extensions",
        title: "VS Code & Cursor",
        level: "h2",
        content: "Extensões otimizadas para desenvolvedores. Adicione snippets inteligentes, suporte a novas linguagens e integração profunda com modelos de codificação."
      }
    ]
  },
  prompts: {
    title: "Engenharia de Prompts",
    description: "Modelos testados para extrair o máximo dos LLMs.",
    breadcrumb: ["Marketplace", "Prompts"],
    sections: [
      {
        id: "coding-prompts",
        title: "Codificação & Arquitetura",
        level: "h2",
        content: "Prompts estruturados para revisão de código, geração de testes unitários e design de sistemas complexos. Compatíveis com Claude 3.5 Sonnet e GPT-4o."
      },
      {
        id: "creative-prompts",
        title: "Escrita Criativa & Copywriting",
        level: "h2",
        content: "Frameworks para criação de conteúdo que não parecem gerados por IA. Foque em tom de voz, persona e engajamento."
      }
    ]
  },
  templates: {
    title: "Templates & Projetos",
    description: "Acelere seu desenvolvimento com estruturas prontas.",
    breadcrumb: ["Marketplace", "Templates"],
    sections: [
      {
        id: "lovable-templates",
        title: "Lovable & React",
        level: "h2",
        content: "Projetos completos configurados com Tailwind, Shadcn/UI e Supabase. Basta clonar e começar a construir sua ideia em minutos."
      },
      {
        id: "workflow-templates",
        title: "N8N & Automações",
        level: "h2",
        content: "Fluxos de trabalho JSON prontos para importar. Automatize seu funil de vendas, suporte ao cliente e processamento de documentos."
      }
    ]
  },
  workflows: {
    title: "Workflows de Automação",
    description: "Conecte ferramentas e crie pipelines de IA poderosos.",
    breadcrumb: ["Marketplace", "Workflows"],
    sections: [
      {
        id: "n8n-flows",
        title: "Integrações N8N",
        level: "h2",
        content: "Nossos workflows para N8N permitem conectar o ChatGPT ao seu Google Drive, Slack e CRM automaticamente. Reduza o trabalho manual em até 80%."
      },
      {
        id: "zapier-alternatives",
        title: "Agentes Autônomos",
        level: "h2",
        content: "Configurações de agentes que executam tarefas complexas de pesquisa e síntese de dados sem intervenção humana constante."
      }
    ]
  },
  chatgpt: {
    title: "Recursos ChatGPT",
    description: "Tudo para a maior plataforma de IA do mundo.",
    breadcrumb: ["Categorias", "ChatGPT"],
    sections: [
      {
        id: "gpts-custom",
        title: "GPTs Personalizados",
        level: "h2",
        content: "Uma lista curada de GPTs focados em produtividade, análise técnica e aprendizado acelerado."
      }
    ]
  },
  lovable: {
    title: "Desenvolvimento Lovable",
    description: "Crie apps full-stack em segundos.",
    breadcrumb: ["Categorias", "Lovable"],
    sections: [
      {
        id: "lovable-components",
        title: "Componentes UI",
        level: "h2",
        content: "Biblioteca de componentes React/Tailwind prontos para serem usados no Lovable via copy-paste inteligente."
      }
    ]
  },
  claude: {
    title: "Poder do Claude",
    description: "Domine o modelo mais inteligente da Anthropic.",
    breadcrumb: ["Categorias", "Claude"],
    sections: [
      {
        id: "claude-mcp",
        title: "Protocolo MCP",
        level: "h2",
        content: "Instruções e servidores para usar o Model Context Protocol com o Claude Desktop, dando à IA acesso ao seu sistema de arquivos e ferramentas locais."
      }
    ]
  },
  cursor: {
    title: "Setup Cursor",
    description: "A melhor IDE de IA configurada para você.",
    breadcrumb: ["Categorias", "Cursor"],
    sections: [
      {
        id: "cursor-rules",
        title: ".cursorrules de Elite",
        level: "h2",
        content: "Arquivos de configuração que ensinam o Cursor exatamente como você gosta de codar, quais padrões seguir e quais bibliotecas evitar."
      }
    ]
  },
  community: {
    title: "Comunidade TecExtension",
    description: "Conecte-se com outros entusiastas de IA.",
    breadcrumb: ["Suporte", "Comunidade"],
    sections: [
      {
        id: "discord-access",
        title: "Servidor Discord",
        level: "h2",
        content: "Entre no nosso Discord para trocar prompts, pedir ajuda com automações e receber novidades em primeira mão."
      }
    ]
  },
  featured: {
    title: "Recursos em Destaque",
    description: "O melhor do nosso marketplace selecionado para você.",
    breadcrumb: ["Suporte", "Destaques"],
    sections: [
      {
        id: "top-picks",
        title: "Escolha dos Editores",
        level: "h2",
        content: "Os recursos que mais geraram valor para nossos usuários este mês."
      }
    ]
  },
};

export function generateTableOfContents(pageId: string) {
  const page = documentationPages[pageId];
  if (!page) return [];
  
  return page.sections.map(section => ({
    id: section.id,
    title: section.title,
    level: section.level
  }));
}
