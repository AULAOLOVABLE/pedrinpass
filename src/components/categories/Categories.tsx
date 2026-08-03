import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import cardDocumentation from "@/assets/card-documentation.png";
import cardApi from "@/assets/card-api.png";
import cardChangelog from "@/assets/card-changelog.png";
import WaveText from "@/components/ui/wave-text";

const categories = [
  {
    image: cardDocumentation,
    title: "Documentação",
    description: "Guias e boas práticas para começar.",
    linkText: "Ler guias",
    href: "/docs/overview",
  },
  {
    image: cardApi,
    title: "Referência da API",
    description: "Tudo o que devs precisam para construir e integrar.",
    linkText: "Ver referência da API",
    href: "/api/refresh-token",
  },
  {
    image: cardChangelog,
    title: "Novidades",
    description: "As últimas atualizações da sua central de conhecimento.",
    linkText: "Ver novidades",
    href: "/changelog",
  },
];

const Categories = () => {
  return (
    <section className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          <WaveText text="Explore por categoria" />
        </h2>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {categories.map((category) => (
            <motion.div
              key={category.title}
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
                image={category.image}
                title={category.title}
                description={category.description}
                linkText={category.linkText}
                href={category.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
