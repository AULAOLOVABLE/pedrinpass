import { useEffect, useRef } from 'react';

export const MotionSystemPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-6 text-primary">Motion Design System</h1>
      <p className="text-xl mb-8 text-foreground/80 leading-relaxed">
        Crie um sistema de motion design reutilizável para a aplicação. Defina tokens de duração, easing, distância, escala, blur e stagger; componentes para Reveal, Stagger, Parallax, MagneticButton, TiltCard, Marquee, PageTransition e ScrollProgress; hooks com cleanup; suporte a prefers-reduced-motion; limites para mobile; e documentação curta de uso. Use Motion for React para layout e microinterações, GSAP para timelines complexas e CSS para animações simples. Evite bibliotecas duplicadas e preserve todas as funcionalidades existentes.
      </p>
      
      <div className="grid gap-6">
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Tokens de Design</h2>
          <ul className="list-disc list-inside space-y-2 opacity-70">
            <li>Duration: fast (200ms), base (400ms), slow (700ms)</li>
            <li>Easing: elastic, emphasize, linear</li>
            <li>Distance: sm (10px), md (20px), lg (40px)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
