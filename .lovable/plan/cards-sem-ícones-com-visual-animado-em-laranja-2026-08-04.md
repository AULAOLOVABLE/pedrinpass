# Cards sem ícones, com visual animado em laranja

## Objetivo
Remover os ícones Lucide dos três cards da seção "Explore por categoria" e voltar a um visual animado (arte em movimento) no topo de cada card, na paleta laranja/coral atual.

## O que muda

### Visual animado no lugar dos ícones
Cada card ganha um painel superior com animação própria feita em CSS/Framer Motion (sem imagens externas, sem ícones):
- **Documentação (card destaque)**: linhas de "texto" que se preenchem em sequência, como páginas sendo escritas, com brilho laranja.
- **Referência da API**: bloco estilo terminal com cursor piscando e linhas de código deslizando.
- **Novidades**: partículas/faíscas laranja subindo em loop com leve pulsação.

Todos com:
- gradiente laranja (`--primary` / `--primary-glow`) sobre fundo grafite
- glow que intensifica no hover
- animação contínua suave, acelerando levemente no hover
- respeito a `prefers-reduced-motion` (animações pausadas)

### Preservado
Títulos, descrições, links, rotas, layout bento (primeiro card em destaque ocupando 2 colunas), stagger de entrada no scroll e demais seções continuam iguais.

## Detalhes técnicos
- Novo arquivo `src/components/categories/CardVisual.tsx` com uma prop `variant: "docs" | "api" | "news"` que renderiza a animação correspondente.
- `CategoryCard.tsx`: remove a prop `icon` e o import de `LucideIcon`, passa a receber `variant` e renderiza `CardVisual` no lugar do bloco de ícone; mantém alturas atuais (destaque 240px, demais 16/9).
- `Categories.tsx`: remove imports de `BookOpen`, `Terminal`, `Sparkles` e troca por `variant` em cada item.
- Cores apenas via tokens semânticos do design system (nada hardcoded).
- Validação: typecheck e screenshot da home em mobile e desktop.
