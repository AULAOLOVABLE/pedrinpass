# High-End Motion Design Redesign for PedrinTEC

Overhaul the user experience using a "High-End Motion Design" philosophy. This focuses on fluid, meaningful transitions, premium materials (glassmorphism, subtle glows), and a structured narrative that leads the user from value proposition to action.

## Design Principles
- **Materials**: Deep obsidian surfaces with selective electric orange glows. Increased use of high-blur glassmorphism.
- **Typography**: Space Grotesk for technical impact, paired with clean, high-contrast sans-serif for readability.
- **Lighting**: Dynamic light sources following scroll or mouse, creating a sense of depth and "3D" space without necessarily using R3F for every element.
- **Motion**: Unified motion language using Framer Motion for entry/exit and GSAP for scroll-synced narrative. Focus on "inertia" and "rhythm".

## Narrative Flow
1. **Hero (Promise)**: "CONSTRUA O FUTURO COM IA". A more cinematic, light-focused entry point.
2. **Product in Action**: Enhancing the `ProductDemo` to be more interactive and "live".
3. **Ecosystem (Benefits)**: Re-styling the grid to feel like a high-tech instrument panel.
4. **Action (CTA)**: A definitive, high-contrast closing section.

## Technical Tasks
### 1. Global Visual Tokens
- Refine `--ui-surface` and `--ui-border` for better contrast.
- Add "material" classes (e.g., `.glass-premium`, `.glow-neural`).

### 2. Cinematic Hero Overhaul
- Update `CinematicHero.tsx` with high-end typography reveals and light-sweeps.
- Integrate a "scroll indicator" that feels like part of the 3D space.

### 3. Motion System Integration
- Standardize all transitions to use a custom "premium" bezier curve.
- Implement "staggered" reveals for all grid items.

### 4. Performance & A11y
- Ensure all animations respect `prefers-reduced-motion`.
- Add a simplified background fallback for low-power devices.

## New Components / Updates
- `src/components/home/HighEndHero.tsx` (or update existing)
- `src/components/home/NeuralGrid.tsx` (Evolution of EcosystemGrid)
- `src/components/effects/LightSweep.tsx`
