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
    id: "system",
    name: "Sistema TechLink",
    title: "Sistema TechLink",
    endpoints: [
      {
        id: "connect",
        title: "Conexão Neural",
        slug: "connect",
        href: "/api/connect",
        path: "/v1/connect",
        method: "POST",
        description: "Estabelece uma conexão neural com o ecossistema TechLink.",
        longDescription: "Use este endpoint para autenticar e iniciar uma sessão neural segura com os servidores TechLink.",
      },
      {
        id: "execute",
        title: "Execução de Agente",
        slug: "execute",
        href: "/api/execute",
        path: "/v1/execute",
        method: "POST",
        description: "Executa uma tarefa automatizada via agentes de IA.",
        longDescription: "Despacha um agente inteligente para realizar tarefas complexas em seu nome.",
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
