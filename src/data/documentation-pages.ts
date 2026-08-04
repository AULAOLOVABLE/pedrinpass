export interface DocumentationPage {
  id: string;
  title: string;
  content: string;
  category: string;
  description: string;
  sections?: { id: string; title: string; content: string }[];
  listItems?: string[];
}

export const documentationPages: DocumentationPage[] = [
  {
    id: "overview",
    title: "Plataforma PedrinTEC",
    description: "Visão geral do ecossistema PedrinTEC.",
    content: "A PedrinTEC é um ecossistema integrado para a próxima geração de desenvolvedores. Unificamos automação, inteligência e colaboração em uma única interface fluida.",
    category: "Geral",
    sections: [
      { id: "intro", title: "Introdução", content: "Bem-vindo ao futuro do desenvolvimento." }
    ]
  },
  {
    id: "agents",
    title: "Agentes Inteligentes",
    description: "Como funcionam nossos agentes de IA.",
    content: "Nossos agentes não apenas executam tarefas, eles antecipam necessidades. Com base em modelos avançados de raciocínio, a PedrinTEC integra LLMs diretamente no seu fluxo de trabalho.",
    category: "IA",
  },
  {
    id: "automation",
    title: "Automação Pura",
    description: "Automatize tudo com PedrinTEC.",
    content: "Esqueça scripts manuais. Use o PedrinTEC Automator para conectar suas ferramentas favoritas com fluxos de trabalho visuais e resilientes.",
    category: "DevOps",
  },
  {
    id: "premium-prompts",
    title: "Prompts Premium",
    description: "Sequência estratégica de prompts para resultados de alta performance.",
    category: "Engenharia de Prompts",
    content: "Nesta seção, você encontrará uma sequência lógica de prompts projetada para guiar modelos de IA através de tarefas complexas, desde o planejamento até a execução final.",
    sections: [
      { 
        id: "context", 
        title: "1. Definição de Contexto", 
        content: "O primeiro passo é estabelecer o papel da IA. Exemplo: 'Atue como um Engenheiro de Software Sênior especializado em arquitetura limpa...'" 
      },
      { 
        id: "requirements", 
        title: "2. Especificação Técnica", 
        content: "Forneça detalhes granulares sobre o que precisa ser construído. Use a técnica de Few-Shot para melhores resultados." 
      },
      { 
        id: "execution", 
        title: "3. Refinamento e Revisão", 
        content: "A sequência final foca em revisar o output e aplicar correções de segurança e performance." 
      }
    ]
  }
];

export const generateTableOfContents = (page: DocumentationPage) => {
  const toc: { id: string; title: string; level: "h2" | "h3" }[] = [];
  if (page.sections) {
    page.sections.forEach(section => {
      toc.push({ id: section.id, title: section.title, level: "h2" as const });
    });
  }
  return toc;
};
