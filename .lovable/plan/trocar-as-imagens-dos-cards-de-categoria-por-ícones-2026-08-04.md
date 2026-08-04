# Trocar as imagens dos cards de categoria por ícones

Na home, os três cards — Documentação, Referência da API e Novidades — usam imagens (o visual de foguete). Elas serão substituídas por ícones Lucide com tratamento visual próprio.

## O que muda

- Documentação: ícone `BookOpen`
- Referência da API: ícone `Terminal`
- Novidades: ícone `Sparkles`

Cada card ganha, no lugar da imagem:
- um bloco com fundo em gradiente sutil (vermelho/laranja do tema) e borda arredondada, mantendo a mesma proporção atual;
- o ícone centralizado, grande, em cor de destaque, com brilho leve;
- animação de hover: leve escala e aumento do brilho, no lugar do zoom da imagem.

Texto, links, ordem dos cards, card em destaque e toda a lógica permanecem iguais.

## Detalhes técnicos

- `src/components/categories/Categories.tsx`: trocar as chaves `image` por `icon` (componentes Lucide), removendo os imports de `card-documentation.png`, `card-api.png` e `card-changelog.png`.
- `src/components/categories/CategoryCard.tsx`: trocar a prop `image: string` por `icon: LucideIcon` e renderizar o bloco de ícone no lugar da `<img>`, mantendo `featured`, classes `bento-card` e os overlays de gradiente existentes.
- Cores via tokens (`primary`, `primary-glow`), sem valores fixos.
- Arquivos de imagem permanecem no projeto (não usados pelos cards).
