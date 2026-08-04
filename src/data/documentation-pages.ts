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

export const documentationPages: Record<string, DocumentationPage> = {
  overview: {
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
  extensions: {
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
        id: "list",
        title: "Extensões Recomendadas",
        content: "Confira algumas de nossas extensões mais populares:",
        listItems: [
          "PedrinTEC Analyzer: Análise profunda de código com IA.",
          "Workflow Orchestrator: Gerenciamento visual de processos.",
          "Prompt Injector: Integração direta de prompts em editores."
        ]
      }
    ]
  },
  prompts: {
    id: "prompts",
    title: "Prompts Premium",
    description: "Sequência estratégica de prompts para resultados de alta performance.",
    category: "Marketplace",
    breadcrumb: ["Marketplace", "Prompts"],
    sections: [
      {
        id: "context",
        title: "1. Definição de Contexto",
        content: "O primeiro passo é estabelecer o papel da IA. Exemplo: 'Atue como um Engenheiro de Software Sênior especializado em arquitetura limpa...'"
      },
      {
        id: "requirements",
        title: "2. Especificação Técnica",
        content: "Forneça detalhes granulares sobre o que precisa ser construído."
      },
      {
        id: "execution",
        title: "3. Refinamento e Revisão",
        content: "A sequência final foca em revisar o output e aplicar correções."
      }
    ]
  }
};
