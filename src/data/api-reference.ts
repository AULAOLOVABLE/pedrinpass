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
    id: "featured",
    title: "Recursos em Destaque",
    endpoints: [
      {
        id: "premium-prompts",
        title: "Prompts Premium",
        method: "GET",
        href: "/api/premium-prompts",
        path: "/v1/resources/prompts",
        description: "Acesse nossa coleção de prompts de elite para diversos modelos.",

        longDescription: "O endpoint de Renovar Token permite trocar um refresh token válido por um novo access token. Os access tokens geralmente têm vida útil curta, enquanto os refresh tokens permanecem válidos por mais tempo, permitindo autenticação contínua sem exigir que o usuário faça login novamente.",
        headers: [
          { key: "Content-Type", value: "application/json", required: true },
          { key: "Authorization", value: "Bearer {refresh_token}", required: true },
        ],
        requestBody: [
          { field: "refresh_token", type: "string", required: true, description: "O refresh token obtido durante o login." },
        ],
        responseBody: [
          { field: "access_token", type: "string", description: "O novo access token." },
          { field: "expires_in", type: "number", description: "Tempo de expiração do token em segundos." },
          { field: "token_type", type: "string", description: "Tipo do token (Bearer)." },
        ],
        exampleRequest: `{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
        exampleResponse: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "token_type": "Bearer"
}`,
      },
      {
        id: "invalidate-session",
        title: "Invalidar sessão",
        method: "DELETE",
        href: "/api/invalidate-session",
        path: "/v1/auth/session",
        description: "Invalida a sessão atual e revoga todos os tokens.",
        longDescription: "Este endpoint invalida a sessão atual do usuário e revoga todos os tokens associados. Use isso quando um usuário fizer logout ou quando você precisar forçar uma reautenticação.",
        headers: [
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        responseBody: [
          { field: "success", type: "boolean", description: "Indica se a sessão foi invalidada." },
          { field: "message", type: "string", description: "Mensagem de confirmação." },
        ],
        exampleResponse: `{
  "success": true,
  "message": "Session invalidated successfully"
}`,
      },
      {
        id: "authenticate-user",
        title: "Autenticar usuário",
        method: "POST",
        href: "/api/authenticate-user",
        path: "/v1/auth/login",
        description: "Autentica um usuário com email e senha.",
        longDescription: "Autentique um usuário usando suas credenciais de email e senha. Retorna access e refresh tokens após autenticação bem-sucedida.",
        headers: [
          { key: "Content-Type", value: "application/json", required: true },
        ],
        requestBody: [
          { field: "email", type: "string", required: true, description: "Endereço de email do usuário." },
          { field: "password", type: "string", required: true, description: "Senha do usuário." },
        ],
        responseBody: [
          { field: "access_token", type: "string", description: "Access token JWT." },
          { field: "refresh_token", type: "string", description: "Refresh token JWT." },
          { field: "user", type: "object", description: "Informações do perfil do usuário." },
        ],
        exampleRequest: `{
  "email": "user@example.com",
  "password": "securepassword123"
}`,
        exampleResponse: `{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "usr_123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}`,
      },
    ],
  },
  {
    id: "users",
    title: "Usuários",
    endpoints: [
      {
        id: "retrieve-user",
        title: "Recuperar um usuário",
        method: "GET",
        href: "/api/retrieve-user",
        path: "/v1/users/{user_id}",
        description: "Recupera os detalhes de um usuário específico pelo seu ID.",
        longDescription: "Busque as informações completas do perfil do usuário, incluindo detalhes da conta, preferências e metadados.",
        headers: [
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        responseBody: [
          { field: "id", type: "string", description: "Identificador único do usuário." },
          { field: "email", type: "string", description: "Endereço de email do usuário." },
          { field: "name", type: "string", description: "Nome de exibição do usuário." },
          { field: "created_at", type: "string", description: "Timestamp de criação da conta." },
        ],
        exampleResponse: `{
  "id": "usr_123",
  "email": "user@example.com",
  "name": "John Doe",
  "created_at": "2024-01-15T10:30:00Z"
}`,
      },
      {
        id: "create-user",
        title: "Criar um novo usuário",
        method: "POST",
        href: "/api/create-user",
        path: "/v1/users",
        description: "Cria uma nova conta de usuário.",
        longDescription: "Registre um novo usuário no sistema. Este endpoint cria uma nova conta de usuário e retorna o objeto do usuário com o ID atribuído.",
        headers: [
          { key: "Content-Type", value: "application/json", required: true },
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        requestBody: [
          { field: "email", type: "string", required: true, description: "Endereço de email do usuário." },
          { field: "name", type: "string", required: true, description: "Nome de exibição do usuário." },
          { field: "password", type: "string", required: true, description: "Senha do usuário (mínimo de 8 caracteres)." },
        ],
        responseBody: [
          { field: "id", type: "string", description: "ID do usuário recém-criado." },
          { field: "email", type: "string", description: "Endereço de email do usuário." },
          { field: "name", type: "string", description: "Nome de exibição do usuário." },
        ],
        exampleRequest: `{
  "email": "newuser@example.com",
  "name": "Jane Smith",
  "password": "securepassword123"
}`,
        exampleResponse: `{
  "id": "usr_456",
  "email": "newuser@example.com",
  "name": "Jane Smith"
}`,
      },
      {
        id: "update-user",
        title: "Atualizar dados do usuário",
        method: "PATCH",
        href: "/api/update-user",
        path: "/v1/users/{user_id}",
        description: "Atualiza as informações de perfil de um usuário existente.",
        longDescription: "Atualize parcialmente o perfil de um usuário. Somente os campos fornecidos no corpo da requisição serão atualizados.",
        headers: [
          { key: "Content-Type", value: "application/json", required: true },
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        requestBody: [
          { field: "name", type: "string", required: false, description: "Nome de exibição atualizado." },
          { field: "email", type: "string", required: false, description: "Endereço de email atualizado." },
        ],
        responseBody: [
          { field: "id", type: "string", description: "ID do usuário." },
          { field: "email", type: "string", description: "Endereço de email atualizado." },
          { field: "name", type: "string", description: "Nome de exibição atualizado." },
        ],
        exampleRequest: `{
  "name": "John Updated"
}`,
        exampleResponse: `{
  "id": "usr_123",
  "email": "user@example.com",
  "name": "John Updated"
}`,
      },
      {
        id: "delete-user",
        title: "Remover um usuário",
        method: "DELETE",
        href: "/api/delete-user",
        path: "/v1/users/{user_id}",
        description: "Exclui permanentemente uma conta de usuário.",
        longDescription: "Esta ação remove permanentemente um usuário e todos os dados associados. Esta operação não pode ser desfeita.",
        headers: [
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        responseBody: [
          { field: "success", type: "boolean", description: "Indica se a exclusão foi bem-sucedida." },
          { field: "message", type: "string", description: "Mensagem de confirmação." },
        ],
        exampleResponse: `{
  "success": true,
  "message": "User deleted successfully"
}`,
      },
      {
        id: "list-users",
        title: "Listar todos os usuários",
        method: "GET",
        href: "/api/list-users",
        path: "/v1/users",
        description: "Recupera uma lista paginada de todos os usuários.",
        longDescription: "Busque uma lista de todos os usuários no sistema com suporte a paginação. Use parâmetros de consulta para filtrar e ordenar os resultados.",
        headers: [
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        responseBody: [
          { field: "data", type: "array", description: "Array de objetos de usuário." },
          { field: "total", type: "number", description: "Número total de usuários." },
          { field: "page", type: "number", description: "Número da página atual." },
          { field: "per_page", type: "number", description: "Itens por página." },
        ],
        exampleResponse: `{
  "data": [
    { "id": "usr_123", "email": "user1@example.com", "name": "John" },
    { "id": "usr_456", "email": "user2@example.com", "name": "Jane" }
  ],
  "total": 42,
  "page": 1,
  "per_page": 10
}`,
      },
    ],
  },
  {
    id: "accounts",
    title: "Contas",
    endpoints: [
      {
        id: "retrieve-account",
        title: "Recuperar detalhes da conta",
        method: "GET",
        href: "/api/retrieve-account",
        path: "/v1/accounts/{account_id}",
        description: "Obtém os detalhes de uma conta específica.",
        longDescription: "Recupere informações completas da conta, incluindo detalhes de cobrança, status da assinatura e métricas de uso.",
        headers: [
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        responseBody: [
          { field: "id", type: "string", description: "Identificador da conta." },
          { field: "name", type: "string", description: "Nome da conta." },
          { field: "plan", type: "string", description: "Plano de assinatura atual." },
          { field: "status", type: "string", description: "Status da conta (ativa, suspensa, etc.)." },
        ],
        exampleResponse: `{
  "id": "acc_789",
  "name": "Acme Corp",
  "plan": "enterprise",
  "status": "active"
}`,
      },
      {
        id: "create-account",
        title: "Criar uma conta",
        method: "POST",
        href: "/api/create-account",
        path: "/v1/accounts",
        description: "Cria uma nova conta de organização.",
        longDescription: "Configure uma nova conta de organização. Isso é normalmente usado ao integrar novas empresas ou equipes.",
        headers: [
          { key: "Content-Type", value: "application/json", required: true },
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        requestBody: [
          { field: "name", type: "string", required: true, description: "Nome da organização." },
          { field: "plan", type: "string", required: false, description: "Plano de assinatura (padrão: starter)." },
        ],
        responseBody: [
          { field: "id", type: "string", description: "Novo ID da conta." },
          { field: "name", type: "string", description: "Nome da conta." },
          { field: "plan", type: "string", description: "Plano selecionado." },
        ],
        exampleRequest: `{
  "name": "Acme Corp",
  "plan": "pro"
}`,
        exampleResponse: `{
  "id": "acc_new123",
  "name": "Acme Corp",
  "plan": "pro"
}`,
      },
      {
        id: "update-account",
        title: "Atualizar informações da conta",
        method: "PATCH",
        href: "/api/update-account",
        path: "/v1/accounts/{account_id}",
        description: "Atualiza as configurações e informações da conta.",
        longDescription: "Modifique detalhes da conta, como nome, informações de cobrança ou plano. Somente os campos fornecidos serão atualizados.",
        headers: [
          { key: "Content-Type", value: "application/json", required: true },
          { key: "Authorization", value: "Bearer {access_token}", required: true },
        ],
        requestBody: [
          { field: "name", type: "string", required: false, description: "Nome da conta atualizado." },
          { field: "plan", type: "string", required: false, description: "Novo plano de assinatura." },
        ],
        responseBody: [
          { field: "id", type: "string", description: "ID da conta." },
          { field: "name", type: "string", description: "Nome atualizado." },
          { field: "plan", type: "string", description: "Plano atual." },
        ],
        exampleRequest: `{
  "plan": "enterprise"
}`,
        exampleResponse: `{
  "id": "acc_789",
  "name": "Acme Corp",
  "plan": "enterprise"
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
