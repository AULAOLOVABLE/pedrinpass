import { useEffect, useRef } from "react";

const GLYPHS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/*+-=$#";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boostRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    const fontSize = 16;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -height);
      speeds = Array.from({ length: columns }, () => 0.5 + Math.random() * 1.1);
    };

    setup();

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY.current);
      lastScrollY.current = window.scrollY;
      boostRef.current = Math.min(boostRef.current + delta * 0.06, 14);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    const render = () => {
      ctx.fillStyle = "rgba(1, 4, 9, 0.08)";
      ctx.fillRect(0, 0, width, height);

      const boost = boostRef.current;
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;

      for (let i = 0; i < columns; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Midnight Cyan head
        ctx.fillStyle = `hsl(199 89% ${68 + Math.min(boost * 1.5, 20)}% / ${0.75 + Math.min(boost * 0.015, 0.25)})`;
        ctx.fillText(char, x, y);

        // Body in muted cyan
        ctx.fillStyle = `hsl(199 89% 60% / ${0.28 + Math.min(boost * 0.02, 0.3)})`;
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], x, y - fontSize);

        drops[i] += (speeds[i] + boost * 0.8) * (prefersReduced ? 0.2 : 1) * fontSize * 0.45;

        if (drops[i] > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -200;
        }
      }

      boostRef.current *= 0.94;
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full opacity-[0.08] will-change-transform" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_0%,hsl(var(--background)/0.9)_50%,hsl(var(--background)/0.99)_100%)]" />
    </div>
  );
};

export default MatrixRain;