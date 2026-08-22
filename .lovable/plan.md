# Redesign PedrinTEC: Electric Pulse (Energetic)

Implementação da nova identidade visual baseada em Obsidian Cyan, com foco em impacto energético, tipografia futurista e layout expansivo.

## Mudanças Visuais
- **Paleta**: Obsidian Cyan (#020617 base, #38bdf8 primary) com efeitos de "glow" intensificados.
- **Tipografia**: Space Grotesk para títulos, DM Sans para corpo de texto.
- **Layout**: Transição de Sidebar para um layout de seções de largura total (Full-width sections) com foco em expansão cinematográfica.
- **Efeitos**: Adição de texturas de grão, brilhos dinâmicos em camadas e animações de mola (spring) para uma sensação orgânica e energética.

## Detalhes Técnicos
- Atualização de `index.html` para incluir DM Sans.
- Refatoração de `src/index.css` com novos tokens semânticos e animações.
- Ajuste de `src/pages/Index.tsx` para remover a Sidebar e implementar o novo ritmo visual.
- Aprimoramento do `CinematicHero.tsx` e `Hero3D.tsx` para a estética "Electric Pulse".
- Atualização dos cards do marketplace para o novo estilo de camadas.

## Checklist de Implementação
- [ ] Importar fontes no `index.html`.
- [ ] Atualizar variáveis HSL e tokens de design no `src/index.css`.
- [ ] Refatorar layout principal no `src/pages/Index.tsx`.
- [ ] Aplicar efeitos de glow e grain nos componentes principais.
- [ ] Validar responsividade e performance (GPU accelerated).
