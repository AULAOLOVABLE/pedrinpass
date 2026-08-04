export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiEndpoint {
  id: string;
  title: string;
  method: HttpMethod;
  href: string;
  path: string;
  description: string;
  longDescription?: string;
  headers?: { key: string; value: string; required: boolean }[];
  requestBody?: { field: string; type: string; required: boolean; description: string }[];
  responseBody?: { field: string; type: string; description: string }[];
  exampleRequest?: string;
  exampleResponse?: string;
}

export interface ApiGroup {
  id: string;
  title: string;
  endpoints: ApiEndpoint[];
}

export const apiGroups: ApiGroup[] = [
  {
    id: "prompts",
    title: "Banco de Prompts",
    endpoints: [
      {
        id: "premium-prompts",
        title: "Prompts de Elite",
        method: "GET",
        href: "/api/premium-prompts",
        path: "/v1/marketplace/prompts",
        description: "Lista os prompts mais bem avaliados da comunidade.",
        longDescription: "Acesse uma base de dados curada com os melhores prompts para engenharia reversa, análise de malware e desenvolvimento fullstack. Todos os prompts são versionados e testados contra alucinações.",
        headers: [
          { key: "Authorization", value: "Bearer {api_key}", required: true },
        ],
        responseBody: [
          { field: "id", type: "uuid", description: "ID único do prompt." },
          { field: "content", type: "string", description: "O corpo do prompt formatado." },
          { field: "model_hint", type: "string", description: "Modelo recomendado (ex: gpt-4o)." },
        ],
        exampleResponse: `{
  "id": "prm_550e8400",
  "content": "Aja como um arquiteto de soluções sênior...",
  "model_hint": "claude-3-5-sonnet"
}`,
      },
    ],
  },
  {
    id: "extensions",
    title: "Catálogo de Extensões",
    endpoints: [
      {
        id: "list-extensions",
        title: "Listar Extensões",
        method: "GET",
        href: "/api/list-extensions",
        path: "/v1/marketplace/extensions",
        description: "Retorna todas as extensões disponíveis no hub.",
        longDescription: "Filtre por categoria (Chrome, VSCode, MCP) e veja detalhes técnicos de instalação e permissões necessárias.",
        headers: [
          { key: "X-App-ID", value: "{your_app_id}", required: true },
        ],
        responseBody: [
          { field: "name", type: "string", description: "Nome comercial da extensão." },
          { field: "version", type: "string", description: "Versão estável atual." },
          { field: "download_url", type: "url", description: "Link direto para o artefato." },
        ],
        exampleResponse: `{
  "name": "TecExtension Debugger",
  "version": "1.2.4",
  "download_url": "https://cdn.tecextension.com/dl/debugger.zip"
}`,
      },
    ],
  },
  {
    id: "templates",
    title: "Repositório de Templates",
    endpoints: [
      {
        id: "get-template",
        title: "Baixar Template",
        method: "POST",
        href: "/api/get-template",
        path: "/v1/marketplace/templates/{id}",
        description: "Gera um link temporário para download de um template de projeto.",
        longDescription: "Escolha o ID do template e receba um pacote compactado com toda a estrutura de diretórios e dependências pré-configuradas.",
        requestBody: [
          { field: "license_key", type: "string", required: true, description: "Sua chave de licença premium." },
        ],
        exampleRequest: `{
  "license_key": "premium_882299"
}`,
        exampleResponse: `{
  "download_link": "https://storage.tecextension.com/temp/template_react_v1.zip",
  "expires_at": "2026-08-05T00:00:00Z"
}`,
      },
    ],
  },
];

export function getEndpointBySlug(slug: string): ApiEndpoint | undefined {
  for (const group of apiGroups) {
    const endpoint = group.endpoints.find((e) => e.id === slug);
    if (endpoint) return endpoint;
  }
  return undefined;
}

export function getGroupForEndpoint(endpointId: string): ApiGroup | undefined {
  return apiGroups.find((group) =>
    group.endpoints.some((e) => e.id === endpointId)
  );
}

export function generateApiTableOfContents(endpointId: string) {
  const endpoint = getEndpointBySlug(endpointId);
  if (!endpoint) return [];

  const items: { id: string; title: string; level: "h2" | "h3" }[] = [
    { id: "endpoint", title: "Endpoint", level: "h2" },
  ];

  if (endpoint.headers && endpoint.headers.length > 0) {
    items.push({ id: "headers", title: "Cabeçalhos", level: "h2" });
  }

  if (endpoint.requestBody && endpoint.requestBody.length > 0) {
    items.push({ id: "request-body", title: "Corpo da Requisição", level: "h2" });
  }

  items.push({ id: "response", title: "Resposta", level: "h2" });

  if (endpoint.exampleRequest || endpoint.exampleResponse) {
    items.push({ id: "example-usage", title: "Exemplo de Uso", level: "h2" });
  }

  return items;
}
