export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiEndpoint {
  path: string;
  method: HttpMethod;
  description: string;
  title: string;
  slug: string;
}

export interface ApiGroup {
  id: string;
  name: string;
  endpoints: ApiEndpoint[];
}

export const apiGroups: ApiGroup[] = [
  {
    id: "system",
    name: "Sistema TechLink",
    endpoints: [
      {
        title: "Conexão Neural",
        slug: "connect",
        path: "/v1/connect",
        method: "POST",
        description: "Estabelece uma conexão neural com o ecossistema TechLink.",
      },
      {
        title: "Execução de Agente",
        slug: "execute",
        path: "/v1/execute",
        method: "POST",
        description: "Executa uma tarefa automatizada via agentes de IA.",
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
      level: 2
    }))
  );
};
