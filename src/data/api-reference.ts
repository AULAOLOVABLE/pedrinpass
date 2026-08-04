export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiEndpoint {
  id?: string;
  path: string;
  method: HttpMethod;
  description: string;
  title: string;
  slug: string;
  href?: string;
  longDescription?: string;
  headers?: { name: string; type: string; required: boolean; description: string }[];
  requestBody?: { name: string; type: string; required: boolean; description: string }[];
  responseBody?: { name: string; type: string; required: boolean; description: string }[];
  exampleRequest?: string;
  exampleResponse?: string;
}

export interface ApiGroup {
  id: string;
  name: string;
  title?: string;
  endpoints: ApiEndpoint[];
}

export const apiGroups: ApiGroup[] = [
  {
    id: "general",
    name: "Introdução",
    title: "Conexão PedrinTEC",
    endpoints: [
      {
        id: "auth",
        title: "Autenticação",
        slug: "connect",
        href: "/api/connect",
        path: "/v1/auth",
        method: "POST",
        description: "Autenticação segura na plataforma.",
        longDescription: "Utilize este endpoint para obter um token de acesso Bearer e interagir com as funcionalidades premium da PedrinTEC.",
        headers: [
          { name: "Content-Type", type: "string", required: true, description: "application/json" }
        ],
        requestBody: [
          { name: "api_key", type: "string", required: true, description: "Sua chave de API privada." }
        ],
        exampleRequest: "curl -X POST https://api.pedrintec.com/v1/auth \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"api_key\": \"pt_live_...\"}'",
        exampleResponse: "{\n  \"token\": \"ey...\",\n  \"expires_in\": 3600\n}"
      }
    ]
  },
  {
    id: "ai",
    name: "Agentes e Prompts",
    title: "IA Core",
    endpoints: [
      {
        id: "execute-prompt",
        title: "Executar Prompt",
        slug: "execute",
        href: "/api/execute",
        path: "/v1/ai/execute",
        method: "POST",
        description: "Envia um prompt para processamento neural.",
        longDescription: "Interface direta com nossos modelos otimizados para engenharia de software e automação.",
        requestBody: [
          { name: "prompt_id", type: "string", required: true, description: "ID do prompt premium." },
          { name: "variables", type: "object", required: false, description: "Variáveis para o prompt." }
        ],
        exampleRequest: "fetch('https://api.pedrintec.com/v1/ai/execute', {\n  method: 'POST',\n  body: JSON.stringify({ prompt_id: 'site-gen-01' })\n})",
        exampleResponse: "{\n  \"status\": \"processing\",\n  \"task_id\": \"tk_123\"\n}"
      }
    ]
  }
];

export const getEndpointBySlug = (slug: string) => {
  for (const group of apiGroups) {
    const endpoint = group.endpoints.find(e => e.slug === slug);
    if (endpoint) return endpoint;
  }
  return null;
};

export const getGroupForEndpoint = (slug: string) => {
  return apiGroups.find(group => group.endpoints.some(e => e.slug === slug)) || null;
};

export const generateApiTableOfContents = (groups: ApiGroup[]) => {
  return groups.flatMap(group => 
    group.endpoints.map(endpoint => ({
      id: endpoint.slug,
      title: endpoint.title,
      level: "h2" as const
    }))
  );
};
