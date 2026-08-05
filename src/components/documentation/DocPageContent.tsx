import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { DocBreadcrumb } from "./DocBreadcrumb";
import { DocSection } from "./DocSection";
import { documentationPages } from "@/data/documentation-pages";
import WaveText from "@/components/ui/wave-text";

export function DocPageContent() {
  const params = useParams();
  const pageSlug = params["*"] || "overview";
  
  const page = documentationPages.find(p => p.id === pageSlug) || documentationPages[0];
  
  if (!page) {
    return (
      <main className="flex-1 min-w-0 px-6 lg:px-12 pt-16 lg:pt-10 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Página não encontrada</h1>
          <p className="text-lg text-muted-foreground">
            A página de documentação que você procura não existe.
          </p>
        </div>
      </main>
    );
  }

  return (
    <motion.main 
      key={pageSlug}
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex-1 min-w-0 px-4 md:px-6 lg:px-12 pt-16 lg:pt-10 pb-10 overflow-hidden"
    >
      <div className="max-w-3xl w-full">
        <DocBreadcrumb items={page.breadcrumb} />

        <div className="mb-12">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            {page.category}
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            <WaveText text={page.title} />
          </h1>
          <p className="text-lg text-muted-foreground">
            {page.description}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground border-t border-border pt-6">
            <div className="flex items-center gap-1">
              <span className="font-medium">Atualizado:</span>
              <span>14 de ago. de 2026</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Confiança:</span>
              <span className="text-primary font-medium">98.4% (n=1.2k)</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {page.sections.map((section) => (
            <DocSection key={section.id} id={section.id} title={section.title} level={section.level}>
              <p>{section.content}</p>
              {section.listItems && (
                <div className="mt-4 bg-secondary/30 rounded-xl p-6 border border-border/50">
                  {section.orderedList ? (
                    <ol className="list-decimal list-inside space-y-3">
                      {section.listItems.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed pl-2">
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="list-none space-y-3">
                      {section.listItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              
              {/* Action buttons per section if needed */}
              <div className="flex gap-4 mt-8">
                {section.id.includes("prompt") || section.id.includes("sequence") ? (
                  <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95">
                    Copiar Conteúdo
                  </button>
                ) : null}
              </div>
            </DocSection>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            ← Anterior
          </button>
          <button className="text-sm font-medium text-primary hover:text-primary-glow transition-colors flex items-center gap-2">
            Próximo →
          </button>
        </div>
      </div>
    </motion.main>
  );
}
