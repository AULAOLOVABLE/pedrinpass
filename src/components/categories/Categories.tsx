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
    href: "/docs/premium-prompts",
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
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Navegue</span>
          <h2 className="text-2xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
            Explore por Categoria
          </h2>
          <div className="h-px w-full bg-ui-border" />
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
