# Plano de Redesign Premium: PedrinTEC

Este plano visa transformar a PedrinTEC em uma interface de elite, seguindo as diretrizes de sofisticação, minimalismo moderno e fluidez absoluta, utilizando a paleta **Midnight Cyan**, tipografia **Archivo Black/Hind** e layout **Sidebar**.

## Alterações Visuais e Identidade

- **Paleta de Cores (Midnight Cyan):**
  - Background: Obsidian Navy (`#020617`)
  - Acento: Electric Cyan (`#38bdf8`)
  - Texto Primário: Slate White (`#f8fafc`)
  - Superfícies/Bordas: Deep Slate (`#1e293b`)
- **Tipografia:**
  - Archivo Black para títulos (Display) - foco em impacto e peso.
  - Hind para corpo de texto - foco em legibilidade técnica.
- **Efeitos Premium:**
  - Glassmorphism refinado com blurs de 12px-20px.
  - Sombras suaves (Soft Shadows) para profundidade 3D.
  - Gradientes lineares sutis em ciano para guiar o olhar.

## Estrutura de Layout (Dashboard Sidebar)

- **Navegação Lateral:** Substituição do Navbar flutuante por uma barra lateral fixa à esquerda, elegante e minimalista.
- **Grid de 8px:** Aplicação rigorosa de espaçamento para ritmo visual perfeito.
- **Cards de Conteúdo:** Refatoração dos cards para um estilo Bento Grid dentro da área principal, com hover effects baseados em `cubic-bezier`.

## Micro-interações e Motion

- **Transições Suaves:** Implementação de fade-ins e staggered animations usando Framer Motion.
- **Feedback Tátil:** Efeitos de escala e brilho ciano em interações de clique e hover.

## Detalhes Técnicos

- **Design Tokens:** Atualização do `src/index.css` com as novas variáveis HSL.
- **Componentes Core:** Refatoração de `Navbar.tsx` (para Sidebar), `Hero.tsx` e `CategoryCard.tsx`.
- **Limpeza:** Remoção de estilos redundantes e otimização de variáveis Tailwind.
