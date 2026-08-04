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
    title: "Biblioteca Premium",
    description: "Mais de centenas de recursos organizados para acelerar seu trabalho.",
    breadcrumb: ["Extensões", "Biblioteca"],
    sections: [
      {
        id: "premium-extensions",
        title: "Extensões Premium",
        level: "h2",
        content: "Nossa biblioteca oferece ferramentas especializadas para elevar sua produtividade. Cada extensão é testada e otimizada para os fluxos de trabalho mais exigentes de IA."
      },
      {
        id: "ai-ecosystem",
        title: "Ecosistema de IA",
        level: "h2",
        content: "Encontre tudo para potencializar sua Inteligência Artificial em um só lugar:",
        listItems: [
          "Extensões para ChatGPT e Chrome",
          "Rules e Agentes para Cursor e VS Code",
          "Servidores MCP para integração profunda",
          "Workflows prontos para N8N",
          "Prompts e Templates profissionais"
        ]
      }
    ]
  },
  prompts: {
    title: "Prompts Premium",
    description: "Coleções prontas para ChatGPT, Claude e Gemini.",
    breadcrumb: ["Prompts", "Destaques"],
    sections: [
      {
        id: "featured-prompts",
        title: "Engenharia de Prompts de Elite",
        level: "h2",
        content: "Desenvolvemos prompts que extraem o máximo potencial dos modelos de linguagem. De codificação complexa a redação criativa, nossa curadoria garante resultados consistentes."
      }
    ]
  },
  workspace: {
    title: "Configure Seu Workspace",
    description: "Aprenda a configurar seu workspace para colaboração e produtividade ideais.",
    breadcrumb: ["Primeiros Passos", "Configure Seu Workspace"],
    sections: [
      {
        id: "workspace-basics",
        title: "Fundamentos do Workspace",
        level: "h2",
        content: "Um workspace é a base da sua equipe no Pedrinpass. Ele contém todos os seus projetos, membros da equipe, chaves de API e configurações. Cada workspace opera de forma independente, com sua própria cobrança e controles de acesso."
      },
      {
        id: "creating-workspace",
        title: "Criando um Workspace",
        level: "h2",
        content: "Siga estes passos para criar seu primeiro workspace:",
        listItems: [
          "Clique em 'Criar Workspace' no painel",
          "Digite um nome descritivo para o seu workspace",
          "Selecione sua região principal para residência de dados",
          "Escolha seu plano de cobrança (você pode fazer upgrade depois)",
          "Convide membros da equipe com as funções apropriadas"
        ],
        orderedList: true
      },
      {
        id: "workspace-settings",
        title: "Configurações do Workspace",
        level: "h2",
        content: "Personalize seu workspace de acordo com o fluxo de trabalho da sua equipe. Configure identidade visual, moedas padrão, preferências de notificação e integrações no painel de administração do workspace."
      },
      {
        id: "team-management",
        title: "Gerenciamento de Equipe",
        level: "h3",
        content: "Adicione membros da equipe e atribua funções com base em suas responsabilidades. As funções disponíveis incluem Proprietário, Administrador, Desenvolvedor e Visualizador. Cada função tem permissões específicas que controlam o acesso a recursos e dados."
      }
    ]
  },
  sandbox: {
    title: "Sandbox vs. Produção",
    description: "Entenda as diferenças entre os ambientes de sandbox e produção.",
    breadcrumb: ["Primeiros Passos", "Sandbox vs. Produção"],
    sections: [
      {
        id: "understanding-environments",
        title: "Entendendo os Ambientes",
        level: "h2",
        content: "O Pedrinpass fornece dois ambientes separados para desenvolvimento e operações reais. Cada ambiente tem suas próprias chaves de API, dados e configurações para garantir testes seguros sem afetar clientes reais."
      },
      {
        id: "sandbox-environment",
        title: "Ambiente de Sandbox",
        level: "h2",
        content: "O sandbox é seu ambiente de testes. Use-o para:",
        listItems: [
          "Testar fluxos de pagamento sem dinheiro real",
          "Simular diversos cenários de cartão (sucesso, recusa, erros)",
          "Desenvolver e depurar integrações com segurança",
          "Treinar membros da equipe na plataforma",
          "Validar webhooks e o tratamento de eventos"
        ]
      },
      {
        id: "production-environment",
        title: "Ambiente de Produção",
        level: "h2",
        content: "A produção lida com transações reais e clientes reais. Antes de entrar em produção, certifique-se de ter concluído todos os requisitos de conformidade e testado bem sua integração no sandbox."
      },
      {
        id: "switching-environments",
        title: "Alternando Entre Ambientes",
        level: "h3",
        content: "Alterne entre sandbox e produção usando o seletor de ambiente no cabeçalho do painel. Suas chaves de API e dados são completamente separados entre os ambientes por segurança."
      }
    ]
  },
  "account-setup": {
    title: "Configuração da Conta",
    description: "Aprenda a configurar sua conta e seu workspace para um uso ideal.",
    breadcrumb: ["Primeiros Passos", "Configuração da Conta"],
    sections: [
      {
        id: "introduction",
        title: "Introdução",
        level: "h2",
        content: "Bem-vindo à Central de Ajuda do Pedrinpass. Este guia vai te conduzir pelos passos essenciais para configurar sua conta e começar a usar a plataforma. Seja você novo no Pedrinpass ou migrando de outra ferramenta, esta documentação cobre tudo o que você precisa."
      },
      {
        id: "creating-your-account",
        title: "Criando Sua Conta",
        level: "h2",
        content: "Configurar sua conta Pedrinpass leva apenas alguns minutos. Siga os passos abaixo para criar sua conta e entrar ou criar um workspace para sua equipe."
      },
      {
        id: "sign-up-process",
        title: "Processo de Cadastro",
        level: "h3",
        content: "Complete estes passos para criar sua conta:",
        listItems: [
          "Acesse a página de cadastro do Pedrinpass e clique em 'Criar Conta'",
          "Digite seu endereço de e-mail e crie uma senha forte",
          "Escolha entre criar um novo workspace ou entrar em um existente",
          "Complete a verificação de captcha para confirmar que você é humano",
          "Clique em 'Continuar' para prosseguir com a verificação de e-mail"
        ],
        orderedList: true
      },
      {
        id: "account-verification",
        title: "Verificação da Conta",
        level: "h3",
        content: "Após o cadastro, você receberá um e-mail de verificação. Clique no link do e-mail para verificar sua conta. Os links de verificação expiram após 24 horas. Se o seu link expirou, você pode solicitar um novo na página de login."
      },
      {
        id: "security-setup",
        title: "Configuração de Segurança",
        level: "h2",
        content: "Proteger sua conta e seus dados é fundamental. O Pedrinpass oferece múltiplas camadas de segurança, incluindo autenticação de dois fatores, gerenciamento de sessões e registro de atividades."
      },
      {
        id: "two-factor-auth",
        title: "Autenticação de Dois Fatores",
        level: "h3",
        content: "Ative o 2FA para maior segurança:",
        listItems: [
          "Acesse Configurações → Segurança → Autenticação de Dois Fatores",
          "Escolha seu método preferido: aplicativo autenticador ou SMS",
          "Escaneie o código QR com seu aplicativo autenticador",
          "Digite o código de verificação para confirmar a configuração",
          "Salve seus códigos de backup em um local seguro"
        ],
        orderedList: true
      }
    ]
  },
  features: {
    title: "Principais Recursos",
    description: "Descubra os recursos poderosos que fazem o Pedrinpass se destacar.",
    breadcrumb: ["Primeiros Passos", "Principais Recursos"],
    sections: [
      {
        id: "feature-overview",
        title: "Visão Geral dos Recursos",
        level: "h2",
        content: "O Pedrinpass oferece um conjunto completo de ferramentas projetadas para cobrir todos os aspectos da sua infraestrutura de pagamentos. De pagamentos únicos simples a modelos complexos de assinatura, temos tudo o que você precisa."
      },
      {
        id: "payment-processing",
        title: "Processamento de Pagamentos",
        level: "h2",
        content: "Aceite pagamentos de clientes do mundo todo com suporte a múltiplos métodos de pagamento:",
        listItems: [
          "Cartões de crédito e débito (Visa, Mastercard, Amex, Discover)",
          "Carteiras digitais (Apple Pay, Google Pay, PayPal)",
          "Transferências bancárias e pagamentos ACH",
          "Métodos de pagamento locais por região",
          "Criptomoeda (Beta)"
        ]
      },
      {
        id: "subscription-billing",
        title: "Cobrança por Assinatura",
        level: "h2",
        content: "Gerencie receita recorrente com nosso mecanismo flexível de assinaturas. Crie planos com ciclos de cobrança personalizados, gerencie upgrades e downgrades, cobranças proporcionais e automatize a cobrança de pagamentos falhos."
      },
      {
        id: "analytics-dashboard",
        title: "Painel de Análises",
        level: "h2",
        content: "Obtenha insights sobre o seu negócio com análises em tempo real. Acompanhe a receita, monitore o churn, analise o comportamento dos clientes e exporte relatórios para as partes interessadas."
      },
      {
        id: "developer-tools",
        title: "Ferramentas para Desenvolvedores",
        level: "h3",
        content: "Construa integrações rapidamente com nossas ferramentas amigáveis para desenvolvedores:",
        listItems: [
          "APIs RESTful com documentação completa",
          "SDKs oficiais para as principais linguagens de programação",
          "Webhooks para notificações de eventos em tempo real",
          "Ferramentas de CLI para desenvolvimento e testes locais",
          "Coleções do Postman para exploração da API"
        ]
      }
    ]
  },
  coupons: {
    title: "Cupons e Descontos",
    description: "Crie e gerencie cupons promocionais para impulsionar a aquisição e retenção de clientes.",
    breadcrumb: ["Produtos e Assinaturas", "Cupons e Descontos"],
    sections: [
      {
        id: "coupon-basics",
        title: "Fundamentos dos Cupons",
        level: "h2",
        content: "Cupons são ferramentas de marketing poderosas que ajudam a atrair novos clientes e recompensar os fiéis. O Pedrinpass suporta descontos baseados em porcentagem e valor fixo, com regras de resgate flexíveis."
      },
      {
        id: "creating-coupons",
        title: "Criando Cupons",
        level: "h2",
        content: "Crie um novo cupom com estes passos:",
        listItems: [
          "Acesse Produtos → Cupons → Criar Cupom",
          "Digite um código de cupom único (ou gere um automaticamente)",
          "Escolha o tipo de desconto: porcentagem ou valor fixo",
          "Defina o valor do desconto e os produtos aplicáveis",
          "Configure limites de uso e data de expiração"
        ],
        orderedList: true
      },
      {
        id: "coupon-restrictions",
        title: "Restrições de Cupom",
        level: "h2",
        content: "Controle como os cupons são usados com configurações de restrição:",
        listItems: [
          "Limite o total de resgates entre todos os clientes",
          "Restrinja a um uso por cliente",
          "Aplique requisitos mínimos de compra",
          "Limite a produtos ou planos específicos",
          "Defina intervalos de datas para validade"
        ]
      },
      {
        id: "tracking-performance",
        title: "Acompanhamento de Desempenho",
        level: "h3",
        content: "Monitore a eficácia dos cupons no painel de análises. Acompanhe as taxas de resgate, o impacto na receita e os custos de aquisição de clientes para otimizar sua estratégia promocional."
      }
    ]
  },
  pricing: {
    title: "Modelos de Precificação",
    description: "Explore diferentes estratégias de preços e como implementá-las no Pedrinpass.",
    breadcrumb: ["Produtos e Assinaturas", "Modelos de Precificação"],
    sections: [
      {
        id: "pricing-strategies",
        title: "Estratégias de Precificação",
        level: "h2",
        content: "Escolha o modelo de precificação que melhor se adapta ao seu negócio. O Pedrinpass suporta várias estratégias de preços para maximizar a receita e a satisfação do cliente."
      },
      {
        id: "flat-rate",
        title: "Preço Fixo",
        level: "h2",
        content: "Cobre um valor fixo pelo seu produto ou serviço. Simples e previsível tanto para você quanto para seus clientes. Ideal para ofertas padronizadas com entrega de valor consistente."
      },
      {
        id: "tiered-pricing",
        title: "Precificação em Níveis",
        level: "h2",
        content: "Ofereça múltiplos planos com diferentes faixas de preço. Cada nível inclui um conjunto específico de recursos, permitindo que os clientes escolham de acordo com suas necessidades e orçamento."
      },
      {
        id: "usage-based",
        title: "Precificação Baseada em Uso",
        level: "h2",
        content: "Cobre com base em métricas de consumo, como chamadas de API, armazenamento ou usuários ativos. Esse modelo alinha os custos ao valor entregue e escala naturalmente com o crescimento do cliente."
      },
      {
        id: "hybrid-models",
        title: "Modelos Híbridos",
        level: "h3",
        content: "Combine taxas de assinatura base com cobranças baseadas em uso. Isso proporciona receita recorrente previsível enquanto captura valor adicional de usuários intensivos."
      }
    ]
  },
  products: {
    title: "Criando um Produto",
    description: "Aprenda a criar e configurar produtos no seu catálogo Pedrinpass.",
    breadcrumb: ["Produtos e Assinaturas", "Criando um Produto"],
    sections: [
      {
        id: "product-setup",
        title: "Configuração de Produto",
        level: "h2",
        content: "Os produtos são a base do seu catálogo Pedrinpass. Cada produto representa algo que você vende, seja uma assinatura, uma compra única ou um serviço baseado em uso."
      },
      {
        id: "create-product",
        title: "Criar um Produto",
        level: "h2",
        content: "Siga estes passos para criar um novo produto:",
        listItems: [
          "Acesse Produtos → Criar Produto",
          "Digite um nome e uma descrição",
          "Adicione imagens e metadados do produto",
          "Configure opções de preço e cobrança",
          "Configure as definições fiscais, se aplicável",
          "Publique o produto quando estiver pronto"
        ],
        orderedList: true
      },
      {
        id: "product-variants",
        title: "Variantes de Produto",
        level: "h2",
        content: "Crie variantes para produtos com diferentes opções, como tamanho, cor ou duração. Cada variante pode ter seu próprio preço, SKU e configurações de estoque."
      },
      {
        id: "product-metadata",
        title: "Metadados do Produto",
        level: "h3",
        content: "Adicione metadados personalizados aos produtos para fins de rastreamento interno ou integração. Os metadados são armazenados como pares chave-valor e podem ser recuperados via API."
      }
    ]
  },
  subscriptions: {
    title: "Assinaturas",
    description: "Gerencie cobranças recorrentes e ciclos de vida de assinaturas com eficácia.",
    breadcrumb: ["Produtos e Assinaturas", "Assinaturas"],
    sections: [
      {
        id: "subscription-overview",
        title: "Visão Geral das Assinaturas",
        level: "h2",
        content: "As assinaturas geram receita recorrente cobrando automaticamente dos clientes em intervalos regulares. O Pedrinpass lida com a complexidade dos ciclos de cobrança, cobrança proporcional e novas tentativas de pagamento."
      },
      {
        id: "creating-subscriptions",
        title: "Criando Assinaturas",
        level: "h2",
        content: "Configure uma assinatura para um cliente:",
        listItems: [
          "Selecione um cliente ou crie um novo",
          "Escolha o produto e o plano de preços",
          "Defina a data de início do ciclo de cobrança",
          "Adicione cupons ou descontos aplicáveis",
          "Configure o período de teste, se aplicável",
          "Confirme e ative a assinatura"
        ],
        orderedList: true
      },
      {
        id: "subscription-lifecycle",
        title: "Ciclo de Vida da Assinatura",
        level: "h2",
        content: "Entenda os estados da assinatura: ativa, em atraso, cancelada e pausada. Cada estado dispara comportamentos diferentes e eventos de webhook para a sua integração."
      },
      {
        id: "plan-changes",
        title: "Upgrades e Downgrades",
        level: "h3",
        content: "Lide com mudanças de plano de forma tranquila com cobrança proporcional automática. Quando um cliente faz upgrade, a diferença é cobrada imediatamente. Downgrades entram em vigor no próximo ciclo de cobrança."
      }
    ]
  },
  "failed-payments": {
    title: "Pagamentos Falhos",
    description: "Lide com falhas de pagamento e recupere receita com estratégias inteligentes de cobrança.",
    breadcrumb: ["Produtos e Assinaturas", "Pagamentos Falhos"],
    sections: [
      {
        id: "understanding-failures",
        title: "Entendendo Falhas de Pagamento",
        level: "h2",
        content: "As falhas de pagamento ocorrem por vários motivos: cartões expirados, fundos insuficientes ou recusas do banco. Entender por que os pagamentos falham ajuda a implementar estratégias eficazes de recuperação."
      },
      {
        id: "common-failure-reasons",
        title: "Motivos Comuns de Falha",
        level: "h2",
        content: "As causas mais frequentes de falhas de pagamento incluem:",
        listItems: [
          "Informações de cartão expiradas ou inválidas",
          "Fundos insuficientes na conta",
          "Cartão reportado como perdido ou roubado",
          "Bloqueios de prevenção a fraude do banco",
          "Limite de crédito excedido",
          "Problemas técnicos com a rede de pagamento"
        ]
      },
      {
        id: "dunning-management",
        title: "Gerenciamento de Cobrança",
        level: "h2",
        content: "O Pedrinpass tenta automaticamente novamente os pagamentos falhos com base na sua programação de cobrança. Configure intervalos de nova tentativa, notificações por e-mail e períodos de carência para maximizar as taxas de recuperação."
      },
      {
        id: "customer-communication",
        title: "Comunicação com o Cliente",
        level: "h3",
        content: "Mantenha os clientes informados com e-mails automáticos quando os pagamentos falharem. Personalize modelos de e-mail e inclua links diretos para os clientes atualizarem seus métodos de pagamento."
      },
      {
        id: "recovery-strategies",
        title: "Estratégias de Recuperação",
        level: "h3",
        content: "Implemente estratégias comprovadas para recuperar pagamentos falhos:",
        listItems: [
          "Envie lembretes por e-mail com links de pagamento no momento certo",
          "Ofereça métodos de pagamento alternativos",
          "Conceda períodos de carência antes do cancelamento",
          "Use tempo de nova tentativa inteligente com base no motivo da falha",
          "Considere oferecer descontos temporários para reter clientes"
        ]
      }
    ]
  },
  encryption: {
    title: "Segurança e Criptografia",
    description: "Saiba mais sobre nossas medidas de segurança e como protegemos seus dados.",
    breadcrumb: ["Segurança", "Segurança e Criptografia"],
    sections: [
      {
        id: "security-overview",
        title: "Visão Geral de Segurança",
        level: "h2",
        content: "A segurança está no centro de tudo o que fazemos. O Pedrinpass emprega múltiplas camadas de proteção para garantir que seus dados e as informações de seus clientes permaneçam seguros o tempo todo."
      },
      {
        id: "data-encryption",
        title: "Criptografia de Dados",
        level: "h2",
        content: "Todos os dados são criptografados tanto em trânsito quanto em repouso:",
        listItems: [
          "TLS 1.3 para todas as comunicações de API",
          "Criptografia AES-256 para dados armazenados",
          "Módulos de segurança de hardware (HSM) para gerenciamento de chaves",
          "Políticas regulares de rotação de chaves",
          "Criptografia de ponta a ponta para campos sensíveis"
        ]
      },
      {
        id: "compliance",
        title: "Conformidade e Certificações",
        level: "h2",
        content: "O Pedrinpass mantém certificações e padrões de conformidade líderes do setor:",
        listItems: [
          "Certificado PCI DSS Nível 1",
          "Conforme com SOC 2 Type II",
          "Conforme com o GDPR",
          "Conforme com o CCPA",
          "Certificado ISO 27001"
        ]
      },
      {
        id: "access-controls",
        title: "Controles de Acesso",
        level: "h2",
        content: "Implemente controles de acesso granulares com permissões baseadas em função. Restrinja o acesso dos membros da equipe a recursos, dados e ambientes específicos com base nas responsabilidades do cargo."
      },
      {
        id: "audit-logging",
        title: "Registro de Auditoria",
        level: "h3",
        content: "Toda ação no Pedrinpass é registrada para fins de responsabilização. Visualize trilhas de auditoria detalhadas mostrando quem fez o quê e quando, ajudando você a manter a conformidade e investigar problemas."
      }
    ]
  }
};

// Helper function to generate table of contents from page sections
export function generateTableOfContents(pageId: string) {
  const page = documentationPages[pageId];
  if (!page) return [];
  
  return page.sections.map(section => ({
    id: section.id,
    title: section.title,
    level: section.level
  }));
}
