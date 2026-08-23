# Plan: PedrinTEC Premium Visual Overhaul

Reconstruct the PedrinTEC identity with an Obsidian & Electric Orange theme, simplifying effects for a high-end technical aesthetic.

## Visual Identity & Tokens
- **Palette Update**: Set background to Obsidian (#050607) and primary to Electric Orange (#FF6A1A) in `src/index.css`.
- **Typography**: Maintain Space Grotesk/DM Sans but refine tracking and weights.
- **Cursor**: Restore native cursor globally; restrict custom cursor effects to specific interactive elements.
- **Semantic Tokens**: Update `--ui-surface`, `--ui-border`, and shadows to use the new orange/obsidian palette.

## Background & Global Effects
- **Matrix Rain**: Update to Orange HSL and drastically reduce opacity to a "near-invisible" level.
- **Simplified Background**: Replace animated gradients in `src/pages/Index.tsx` with a static deep obsidian gradient and subtle grain.
- **Mouse Interaction**: Refine the orange mouse-glow to be discrete and non-distracting.

## Hero Reconstruction
- **Content**: Update Hero titles and subtitles to focus on "CONSTRUA. APRENDA. AUTOMATIZE."
- **Visuals**: Overhaul `src/components/hero/Hero3D.tsx`.
    - Remove the central distorted sphere.
    - Implement a "Software Engineering" abstract composition (code snippets, terminal nodes, connection lines).
    - Reduce particle count in `ParticleField` for performance and clarity.
- **Responsiveness**: Ensure the Hero composition scales gracefully or simplifies to a clean 2D layout on mobile.

## Performance & Optimization
- **Effect Cleanup**: De-duplicate GSAP and Framer Motion triggers in `src/pages/Index.tsx`.
- **Rendering**: Reduce `requestAnimationFrame` complexity in `MatrixRain` and `Hero3D`.

## Technical Details
- **Colors**:
  - Background: `#050607` (HSL: 210 17% 2%)
  - Surface: `#0B0D10` (HSL: 220 18% 5%)
  - Primary: `#FF6A1A` (HSL: 21 100% 55%)
  - Text: `#F5F5F4` (HSL: 60 5% 96%)
- **Component changes**:
  - `src/index.css`: Update root variables and remove `cursor: none`.
  - `src/components/hero/CinematicHero.tsx`: Update text and CTA logic.
  - `src/components/hero/Hero3D.tsx`: Replace sphere with code-inspired geometry.
  - `src/components/effects/MatrixRain.tsx`: Color shift and opacity nerf.
