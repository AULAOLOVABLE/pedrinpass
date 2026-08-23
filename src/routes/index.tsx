import React from "react";

const AuditPage = () => {
  return (
    <div style={{ whiteSpace: "pre-wrap", padding: "2rem", fontFamily: "monospace" }}>
      Audite este projeto PedrinTec como engenheiro sênior React + TypeScript + Vite.

NESTA ETAPA, NÃO ALTERE NADA.

Analise o projeto real e mapeie:

* rotas `/`, `/docs/*`, `/api/*`, `/changelog` e 404;
* Navbar, Footer, Sidebar, Breadcrumbs e CTAs;
* documentação e API Reference;
* busca;
* assistente de IA;
* responsividade/mobile;
* animações e performance;
* acessibilidade;
* TypeScript, imports, código morto e duplicações;
* conteúdo, nomenclaturas e identidade PedrinTec.

Procure principalmente:

* links/rotas quebrados;
* botões sem função;
* páginas inacessíveis;
* slugs e breadcrumbs inconsistentes;
* documentação duplicada ou divergente;
* busca retornando destino inválido;
* conteúdo placeholder/mock;
* componentes que aparentam funcionar sem implementação real;
* problemas mobile/overflow;
* animações concorrentes ou excessivamente pesadas;
* erros TypeScript/build/lint.

Não invente backend, API, Supabase, Auth ou funcionalidades inexistentes.

Classifique cada descoberta como:

`BUG CONFIRMADO / INCONSISTÊNCIA / DÍVIDA TÉCNICA / MELHORIA / NÃO CONFIRMADO`

e por severidade `P0–P4`.

Para cada problema mostre:

`arquivo → localização → evidência → causa → correção sugerida → risco`

Ao final, apresente um plano de correção priorizado.

NÃO implemente ainda.
    </div>
  );
};

export default AuditPage;
