import { motion } from "framer-motion";

export type CardVisualVariant = "docs" | "api" | "news";

interface CardVisualProps {
  variant: CardVisualVariant;
  featured?: boolean;
}

const lineWidths = ["85%", "70%", "92%", "60%", "78%"];

const DocsVisual = () => (
  <div className="flex w-full flex-col gap-3 px-8">
    {lineWidths.map((w, i) => (
      <motion.div
        key={i}
        className="h-2 rounded-full bg-gradient-to-r from-primary via-primary-glow to-transparent"
        style={{ maxWidth: w }}
        initial={{ scaleX: 0.05, opacity: 0.25 }}
        animate={{ scaleX: [0.05, 1, 1, 0.05], opacity: [0.25, 1, 1, 0.25] }}
        transition={{
          duration: 4,
          times: [0, 0.35, 0.8, 1],
          repeat: Infinity,
          delay: i * 0.35,
          ease: "easeInOut",
        }}
        transformTemplate={(_, t) => `${t}`}
      />
    ))}
  </div>
);

const codeLines = ["POST /v1/token", "Authorization: Bearer", "{ \"scope\": \"read\" }", "200 OK"];

const ApiVisual = () => (
  <div className="w-full px-6">
    <div className="rounded-xl border border-primary/20 bg-background/60 p-4 font-mono text-[11px] leading-relaxed shadow-[0_0_30px_hsl(var(--primary)/0.15)_inset]">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-primary/70" />
        <span className="h-2 w-2 rounded-full bg-primary/40" />
        <span className="h-2 w-2 rounded-full bg-primary/20" />
      </div>
      {codeLines.map((line, i) => (
        <motion.div
          key={line}
          className="truncate text-primary-glow/90"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: [0, 1, 1, 0], x: [-8, 0, 0, 8] }}
          transition={{
            duration: 5,
            times: [0, 0.15, 0.8, 1],
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <span className="text-muted-foreground">$ </span>
          {line}
        </motion.div>
      ))}
      <motion.span
        className="mt-1 inline-block h-3 w-[7px] bg-primary"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      />
    </div>
  </div>
);

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7 + 6) % 96}%`,
  size: 4 + ((i * 3) % 7),
  delay: (i % 7) * 0.45,
  duration: 3 + ((i * 0.4) % 2.5),
}));

const NewsVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    {particles.map((p, i) => (
      <motion.span
        key={i}
        className="absolute bottom-0 rounded-full bg-primary-glow shadow-[0_0_12px_hsl(var(--primary)/0.9)]"
        style={{ left: p.left, width: p.size, height: p.size }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [20, -160], opacity: [0, 1, 0], scale: [0.6, 1, 0.5] }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeOut",
        }}
      />
    ))}
    <motion.div
      className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl"
      animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const CardVisual = ({ variant, featured = false }: CardVisualProps) => {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-[1.25rem] border border-border/60 motion-reduce:[&_*]:!animate-none ${
        featured ? "aspect-[16/10] md:aspect-[16/10] md:h-[240px]" : "aspect-[16/9]"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(120% 120% at 50% 0%, hsl(var(--primary) / 0.18) 0%, transparent 60%), linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)",
      }}
    >
      {variant === "docs" && <DocsVisual />}
      {variant === "api" && <ApiVisual />}
      {variant === "news" && <NewsVisual />}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-tr from-primary/20 to-transparent" />
    </div>
  );
};

export default CardVisual;
