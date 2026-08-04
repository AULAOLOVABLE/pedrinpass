export const apiGroups = [
  {
    name: "Sistema TechLink",
    endpoints: [
      {
        path: "/v1/connect",
        method: "POST",
        description: "Estabelece uma conexão neural com o ecossistema TechLink.",
      },
      {
        path: "/v1/execute",
        method: "POST",
        description: "Executa uma tarefa automatizada via agentes de IA.",
      }
    ]
  }
];
