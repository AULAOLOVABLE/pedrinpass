import React from "react";

const AuditPage = () => {
  return (
    <div style={{ whiteSpace: "pre-wrap", padding: "2rem", fontFamily: "monospace" }}>
      Agora continue a evolução da Home usando a identidade criada na etapa anterior.

Não refaça a identidade novamente.

Objetivo desta etapa: reorganizar o conteúdo e criar uma experiência de scroll curta, lógica e conectada ao propósito da plataforma.

## 1. Corrigir o storytelling

A Home deve seguir esta narrativa:

```text
IDEIA
↓
CÓDIGO
↓
IA
↓
AUTOMAÇÃO
↓
PRODUTO
```

Cada seção deve avançar essa história.

Evitar blocos isolados sem relação entre si.

## 2. Criar seção Code Journey

Logo após o Hero, crie uma seção visual curta que represente:

`Ideia → Código → API → IA → Deploy`

Ela pode usar scroll progress controlado.

Exemplo conceitual:

```text
[ IDEA ]
   ↓
{ code }
   ↓
[ API ]
   ↓
[ AI ]
   ↓
DEPLOY ✓
```

A animação deve ser finita.

Não criar scroll infinito.

## 3. Estrutura da animação

Utilize aproximadamente:

```text
0.00–0.25 = código aparece
0.25–0.50 = conexões entre serviços
0.50–0.75 = produto/interface se forma
0.75–1.00 = deploy concluído
```

A seção externa pode ter algo entre aproximadamente 160vh e 220vh, desde que testado.

Não usar alturas absurdas como 500vh.

O conteúdo seguinte deve começar imediatamente depois.

## 4. Ecossistema

Depois da animação, reorganize os recursos da plataforma em categorias claras:

* Prompts
* Extensões
* Templates
* Automações
* APIs
* Conteúdo / Trilhas

Use cards premium, porém simples.

Cada card deve comunicar utilidade real.

Evitar cards apenas decorativos.

## 5. Produto em ação

Crie uma seção mostrando visualmente como o produto funciona.

Pode usar preview de:

* painel;
* editor;
* assistente IA;
* marketplace;
* automação.

Essa seção deve parecer uma demonstração real da aplicação, não mockups aleatórios.

## 6. Dashboard

O dashboard não deve mais ser o primeiro grande conteúdo depois do Hero.

Reposicione depois da apresentação do ecossistema ou do produto em ação.

O visitante primeiro entende o que é a plataforma e depois vê métricas.

## 7. Espaçamento

Reduza espaços excessivos.

No projeto atual existem blocos como:

```tsx
space-y-48
py-32
```

Revise esses valores.

Quero ritmo mais controlado e menos áreas pretas gigantescas.

O scroll deve parecer proposital.

## 8. Animações

Padronize.

Escolha uma abordagem principal para scroll:

* GSAP ScrollTrigger

OU

* Framer Motion

Não misturar tecnologias sem necessidade.

Usar:

* opacity;
* translate;
* scale leve;
* line drawing;
* stagger discreto.

Evitar:

* zoom excessivo;
* rotação de cards;
* elementos voando pela tela;
* scrub em tudo.

## 9. Mobile

No mobile:

* sem sticky prolongado;
* animação Code Journey simplificada;
* cards em fluxo natural;
* zero scroll horizontal;
* sem seções gigantes;
* boa leitura com uma mão.

## 10. Validação

Teste:

* scroll lento;
* scroll rápido;
* voltar para cima;
* resize;
* mobile;
* tablet;
* desktop;
* conteúdo seguinte aparecendo normalmente;
* ausência de área vazia;
* ausência de seção presa.

## Resultado esperado

A Home deve contar uma história coerente:

`Você tem uma ideia → aprende/constrói → usa IA → automatiza → transforma em produto.`

Nada deve parecer inserido apenas para preencher espaço.

Ao finalizar, informe:

* nova ordem das seções;
* componentes criados;
* componentes reaproveitados;
* causa de eventuais espaços vazios encontrados;
* como o scroll foi limitado.
    </div>
  );
};

export default AuditPage;