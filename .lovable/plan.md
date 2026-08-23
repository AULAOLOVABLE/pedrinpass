# Evolution of PedrinTEC Home Page

Evolution of the Home page to create a coherent storytelling experience (Idea → Code → AI → Automation → Product) using high-end scroll-controlled animations and optimized layout.

## Technical Details

### 1. Storytelling & "Code Journey" Section
- **Component**: Create `src/components/home/CodeJourney.tsx`.
- **Logic**: A scroll-triggered section (approx. 180vh) using GSAP ScrollTrigger.
- **Narrative**:
  - `0.00–0.25`: Idea/Code appearance (monospaced snippets).
  - `0.25–0.50`: Connection nodes (SVG line drawing) representing APIs.
  - `0.50–0.75`: AI brain/spark effects merging with code.
  - `0.75–1.00`: Final "Product" interface/Deploy status.
- **Performance**: Use CSS transitions for simple states and GSAP for scroll sync.

### 2. Layout Reorganization
- **Hero**: Maintain current CinematicHero but ensure it transitions smoothly into the Code Journey.
- **Ecossistema**: Reorganize `Categories.tsx` or create a new `src/components/home/Ecosystem.tsx` with categories: Prompts, Extensions, Templates, Automations, APIs, Trilhas.
- **Product in Action**: Create `src/components/home/ProductDemo.tsx` showing a "real" interface (editor/AI assistant preview).
- **Dashboard**: Move after Ecosystem/Product sections.

### 3. Visual Refinement & Spacing
- Reduce `space-y-48` and `py-32` in `src/pages/Index.tsx` to more rhythmic values (e.g., `space-y-24 py-16`).
- Ensure all animations use a unified approach (GSAP for scroll-synced, Framer Motion for entrance).
- Remove excessive empty black spaces.

### 4. Mobile & Performance
- Simplify Code Journey for mobile (stacking or simple opacity fades).
- Remove sticky elements that clutter small screens.
- Ensure 60fps by limiting simultaneous complex animations.

## Architecture

### New Components
- `src/components/home/CodeJourney.tsx`
- `src/components/home/ProductDemo.tsx`
- `src/components/home/EcosystemGrid.tsx` (Refactored from Categories)

### Modified Files
- `src/pages/Index.tsx`: Main layout restructuring.
- `src/routes/index.tsx`: Update with verbatim audit text.
- `src/index.css`: Add styles for the Code Journey lines and nodes.

## User-facing Changes
- A new interactive scroll experience that explains the platform's value proposition.
- A more logical flow from "Introduction" to "Tools" to "Proof of Work" (Dashboard).
- Improved mobile experience with less vertical whitespace.
