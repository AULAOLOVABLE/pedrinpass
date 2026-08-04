import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import WaveText from "@/components/ui/wave-text";

const categories = [
  {
    variant: "docs" as const,
    title: "Biblioteca Premium",
    description: "Mais de centenas de recursos organizados para acelerar seu trabalho.",
    linkText: "Explorar Biblioteca",
    href: "/docs/extensions",
  },
  {
    variant: "api" as const,
    title: "Prompts Premium",
    description: "Coleções prontas para ChatGPT, Claude e Gemini.",
    linkText: "Ver Prompts",
    href: "/api/premium-prompts",
  },
  {
    variant: "news" as const,
    title: "Templates Lovable",
    description: "Projetos completos para acelerar seu desenvolvimento.",
    linkText: "Explorar Templates",
    href: "/changelog",
  },
];


const Categories = () => {
  return (
    <section className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-3">
          <span className="eyebrow">Navegue</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            <WaveText text="Explore por categoria" />
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className=""
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                },
              }}
            >
              <CategoryCard
                variant={category.variant}
                title={category.title}
                description={category.description}
                linkText={category.linkText}
                href={category.href}
                featured={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
