import React from "react";

const AuditPage = () => {
  return (
    <div style={{ whiteSpace: "pre-wrap", padding: "2rem", fontFamily: "monospace" }}>
      Analise o projeto atual antes de editar.

Objetivo desta etapa: unificar a identidade visual, remover excessos e reconstruir o Hero sem alterar funcionalidades internas, autenticação, rotas, banco, marketplace ou regras de negócio.

## 1. Auditoria visual

Localize e revise principalmente:

* `src/pages/Index.tsx`
* `src/components/hero/CinematicHero.tsx`
* `src/components/hero/Hero3D.tsx`
* `src/components/effects/MatrixRain.tsx`
* `src/index.css`
* efeitos globais de mouse, canvas, partículas e scroll

Hoje há excesso de efeitos simultâneos:

* Matrix Rain global;
* 3D com milhares de partículas;
* esfera distorcida;
* glow seguindo mouse;
* grain;
* cursor customizado;
* GSAP;
* Framer Motion.

Simplifique.

Não quero remover toda a personalidade visual, mas quero que cada efeito tenha função.

## 2. Nova identidade principal

Padronize o projeto para:

* fundo Obsidian/preto profundo;
* laranja elétrico como cor principal;
* branco quebrado para textos;
* cinza frio para elementos secundários;
* evitar ciano como cor dominante;
* estética premium, técnica e minimalista;
* sem visual gamer exagerado.

Sugestão de direção:

```text
Background: #050607
Surface: #0B0D10
Primary: #FF6A1A
Primary hover: #FF7A2B
Text: #F5F5F4
Muted: #8B919A
Border: rgba(255,255,255,0.08)
```

Converta isso em tokens semânticos, não espalhe hex aleatório pelo projeto.

## 3. Hero

Substitua a comunicação genérica atual como “NEURAL SYNC”.

O Hero deve explicar imediatamente o projeto.

Direção de conteúdo:

Título:
`CONSTRUA. APRENDA. AUTOMATIZE.`

Subtítulo:
`Engenharia de software, IA, prompts, ferramentas e recursos para transformar ideias em produtos reais.`

CTAs:

* `Explorar ecossistema`
* `Ver recursos`

Ajuste o texto se necessário, mas preserve esse posicionamento.

## 4. Visual do Hero

Não usar mais uma esfera 3D genérica como protagonista.

Substitua por uma composição que remeta diretamente a desenvolvimento:

* editor de código;
* terminal;
* snippets;
* API;
* banco;
* componentes;
* deploy;
* pequenos nós conectados.

Pode manter profundidade e movimento, porém com visual abstrato de software.

Evitar:

* grandes formas geométricas aleatórias;
* objeto central girando sem significado;
* excesso de partículas;
* chuva de caracteres ocupando toda a tela.

## 5. Background

O fundo pode possuir:

* micro partículas muito sutis;
* linhas de código quase imperceptíveis;
* glow laranja discreto;
* grain extremamente leve.

Escolha poucos efeitos.

Não mantenha Matrix Rain em toda a aplicação se ela estiver competindo visualmente com o conteúdo.

## 6. Cursor

Remova `cursor: none` global.

Se quiser manter cursor customizado, aplique somente em áreas especiais e apenas desktop.

A navegação comum deve continuar usando cursor nativo.

## 7. Performance

Reduza custo gráfico.

Se `Hero3D` permanecer:

* reduzir drasticamente partículas;
* pausar animações fora da viewport;
* reduzir complexidade no mobile;
* respeitar `prefers-reduced-motion`.

Evitar múltiplos loops independentes de `requestAnimationFrame`.

## 8. Responsividade

Desktop:

* Hero cinematográfico.

Tablet:

* reduzir elementos decorativos.

Mobile:

* remover 3D pesado;
* manter composição simplificada;
* CTA visível;
* sem overflow horizontal.

## Não alterar

Não mexer nesta etapa em:

* autenticação;
* banco;
* rotas;
* planos;
* dashboard interno;
* checkout;
* APIs;
* conteúdo do marketplace.

## Resultado esperado

A página deve parecer um único produto.

Quero deixar de transmitir:

`template futurista cheio de efeitos`

e passar a transmitir:

`plataforma premium de código, IA e engenharia de software`.

Ao finalizar, informe:

* arquivos alterados;
* efeitos removidos;
* efeitos mantidos;
* impacto de performance;
* como o Hero ficou responsivo.
    </div>
  );
};

export default AuditPage;