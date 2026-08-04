export interface DocumentationPage {
  id: string;
  title: string;
  content: string;
  category: string;
  description: string;
  sections?: { id: string; title: string; content: string }[];
}

export const documentationPages: DocumentationPage[] = [
  {
    id: "overview",
    title: "Plataforma TechLink",
    description: "Visão geral do ecossistema TechLink.",
    content: "A TechLink é um ecossistema integrado para a próxima geração de desenvolvedores. Unificamos automação, inteligência e colaboração em uma única interface fluida.",
    category: "Geral",
    sections: [
      { id: "intro", title: "Introdução", content: "Bem-vindo ao futuro do desenvolvimento." }
    ]
  },
  {
    id: "agents",
    title: "Agentes Inteligentes",
    description: "Como funcionam nossos agentes de IA.",
    content: "Nossos agentes não apenas executam tarefas, eles antecipam necessidades. Com base em modelos avançados de raciocínio, a TechLink integra LLMs diretamente no seu fluxo de trabalho.",
    category: "IA",
  },
  {
    id: "automation",
    title: "Automação Pura",
    description: "Automatize tudo com TechLink.",
    content: "Esqueça scripts manuais. Use o TechLink Automator para conectar suas ferramentas favoritas com fluxos de trabalho visuais e resilientes.",
    category: "DevOps",
  }
];

export const generateTableOfContents = (page: DocumentationPage) => {
  const toc = [{ id: "top", title: page.title, level: 1 }];
  if (page.sections) {
    page.sections.forEach(section => {
      toc.push({ id: section.id, title: section.title, level: 2 });
    });
  }
  return toc;
};
