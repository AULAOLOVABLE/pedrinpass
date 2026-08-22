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
      },
      {
        id: "list-prompts",
        title: "Listar Prompts",
        slug: "list",
        href: "/api/list",
        path: "/v1/ai/prompts",
        method: "GET",
        description: "Retorna a lista de todos os prompts disponíveis.",
        longDescription: "Obtenha metadados, versões e categorias de todos os prompts premium ativos no sistema.",
        exampleRequest: "curl -X GET https://api.pedrintec.com/v1/ai/prompts \\\n  -H 'Authorization: Bearer YOUR_TOKEN'",
        exampleResponse: "[\n  { \"id\": \"eng-l7\", \"name\": \"Principal Engineer\", \"category\": \"Engineering\" },\n  { \"id\": \"ux-pro\", \"name\": \"UX Specialist\", \"category\": \"Design\" }\n]"
      },
      {
        id: "train-agent",
        title: "Treinar Agente",
        slug: "train",
        href: "/api/train",
        path: "/v1/ai/agents/train",
        method: "POST",
        description: "Inicia o treinamento de um agente customizado.",
        longDescription: "Forneça seu conjunto de dados e parâmetros para criar uma instância de IA especializada no seu domínio.",
        requestBody: [
          { name: "dataset_url", type: "string", required: true, description: "URL do dataset (CSV/JSON)." },
          { name: "model", type: "string", required: true, description: "Modelo base (gpt-4o, claude-3-5)." }
        ],
        exampleRequest: "fetch('https://api.pedrintec.com/v1/ai/agents/train', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ dataset_url: '...', model: 'gpt-4o' })\n})",
        exampleResponse: "{\n  \"training_id\": \"tr_789\",\n  \"eta\": \"45m\"\n}"
      }
    ]
  },
  {
    id: "automation",
    name: "Automações e N8N",
    title: "Workflow Engine",
    endpoints: [
      {
        id: "trigger-workflow",
        title: "Disparar Workflow",
        slug: "trigger",
        href: "/api/trigger",
        path: "/v1/workflows/trigger",
        method: "POST",
        description: "Inicia a execução de um workflow automatizado.",
        longDescription: "Acione fluxos do N8N ou automações internas via Webhook com payloads dinâmicos.",
        requestBody: [
          { name: "workflow_id", type: "string", required: true, description: "ID do workflow no N8N." },
          { name: "payload", type: "object", required: true, description: "Dados de entrada para o fluxo." }
        ],
        exampleRequest: "curl -X POST https://api.pedrintec.com/v1/workflows/trigger \\\n  -d '{\"workflow_id\": \"123\", \"payload\": {\"email\": \"test@example.com\"}}'",
        exampleResponse: "{\n  \"execution_id\": \"ex_456\",\n  \"status\": \"queued\"\n}"
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
