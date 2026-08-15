# Plano de Reconstrução de Interface Premium

Reconstrução da interface da PedrinTEC para um padrão visual premium (2027), focando em hierarquia, contraste, responsividade e estados de componentes, mantendo todas as funcionalidades existentes.

## Design e Experiência do Usuário

- **Design System Obsidian**: Implementação de uma paleta de cores ultra-minimalista baseada em tons de obsidiana e carvão, com o laranja vibrante da marca usado estritamente para destaque e ação.
- **Tipografia de Precisão**: Utilização de Space Grotesk para títulos e Inter Tight para corpo de texto, com escala tipográfica rigorosa.
- **Micro-interações de Próxima Geração**: Feedback tátil em todos os elementos clicáveis (escala 0.95 no clique) e transições suaves entre estados.
- **Estados Abrangentes**: Implementação visual para estados de hover, focus (ring laranja), active, disabled, loading, empty, success e error em todos os componentes de UI.

## Componentes a Serem Atualizados

- **Button & Input**: Refatoração para usar tokens semânticos de superfície e borda, com foco visível aprimorado.
- **Cards (Bento)**: Evolução do glassmorphism com blur de 20px e bordas dinâmicas que reagem ao movimento do mouse.
- **Dashboard**: Melhoria da hierarquia visual dos KPIs e otimização do contraste para leitura de dados complexos.
- **Assistente Neural**: Refinamento do chat para uma experiência mais limpa, focada em produtividade.

## Detalhes Técnicos

- **Tokens Semânticos**: Centralização de variáveis HSL no `index.css` para consistência absoluta.
- **Acessibilidade WCAG 2.2**: Garantia de contraste AA, labels ARIA em todos os inputs e navegação por teclado fluida.
- **Performance**: Manutenção de 60fps através de aceleração por hardware (GPU) para animações de layout.
