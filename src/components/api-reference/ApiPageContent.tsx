import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getEndpointBySlug, getGroupForEndpoint } from "@/data/api-reference";
import { ApiEndpointBlock } from "./ApiEndpointBlock";
import { ApiCodeBlock } from "./ApiCodeBlock";
import { ApiTable } from "./ApiTable";
import WaveText from "@/components/ui/wave-text";

export function ApiPageContent() {
  const params = useParams();
  const endpointSlug = params["*"] || "connect";
  const endpoint = getEndpointBySlug(endpointSlug);
  const group = getGroupForEndpoint(endpointSlug);

  if (!endpoint) {
    return (
      <main className="flex-1 min-w-0 px-6 lg:px-12 py-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Endpoint não encontrado
          </h1>
          <p className="text-muted-foreground">
            Não foi possível encontrar o endpoint solicitado.
          </p>
        </div>
      </main>
    );
  }

  return (
    <motion.main 
      key={endpointSlug}
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex-1 min-w-0 px-4 md:px-6 lg:px-12 pt-16 lg:pt-10 pb-10 overflow-hidden"
    >
        <div className="max-w-3xl w-full">
          {group && (
            <p className="text-sm text-muted-foreground mb-2">{group.name}</p>
          )}

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            <WaveText text={endpoint.title} />
          </h1>

          <p className="text-muted-foreground mb-8">{endpoint.description}</p>

          {endpoint.longDescription && (
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {endpoint.longDescription}
            </p>
          )}

          <section id="endpoint" className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Endpoint</h2>
            <ApiEndpointBlock method={endpoint.method} path={endpoint.path} />
          </section>

          {endpoint.headers && endpoint.headers.length > 0 && (
            <section id="headers" className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">Cabeçalhos</h2>
              <ApiTable
                columns={[
                  { key: "name", label: "Chave" },
                  { key: "type", label: "Tipo" },
                  { key: "required", label: "Obrigatório" },
                  { key: "description", label: "Descrição" },
                ]}
                data={endpoint.headers}
              />
            </section>
          )}

          {endpoint.requestBody && endpoint.requestBody.length > 0 && (
            <section id="request-body" className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">Corpo da requisição</h2>
              <ApiTable
                columns={[
                  { key: "name", label: "Campo" },
                  { key: "type", label: "Tipo" },
                  { key: "required", label: "Obrigatório" },
                  { key: "description", label: "Descrição" },
                ]}
                data={endpoint.requestBody}
              />
            </section>
          )}

          <section id="response" className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Resposta</h2>
            {endpoint.responseBody && endpoint.responseBody.length > 0 ? (
              <ApiTable
                columns={[
                  { key: "name", label: "Campo" },
                  { key: "type", label: "Tipo" },
                  { key: "description", label: "Descrição" },
                ]}
                data={endpoint.responseBody}
              />
            ) : (
              <p className="text-muted-foreground">Sem corpo de resposta.</p>
            )}
          </section>

          {(endpoint.exampleRequest || endpoint.exampleResponse) && (
            <section id="example-usage" className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">Exemplo de uso</h2>
              
              {endpoint.exampleRequest && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Requisição</h3>
                  <ApiCodeBlock>{endpoint.exampleRequest}</ApiCodeBlock>
                </div>
              )}

              {endpoint.exampleResponse && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Resposta</h3>
                  <ApiCodeBlock>{endpoint.exampleResponse}</ApiCodeBlock>
                </div>
              )}
            </section>
          )}
        </div>
    </motion.main>
  );
}
