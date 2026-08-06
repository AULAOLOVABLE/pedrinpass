import { HttpMethodBadge } from "./HttpMethodBadge";
import type { HttpMethod } from "@/data/api-reference";

interface ApiEndpointBlockProps {
  method: HttpMethod;
  path: string;
}

export function ApiEndpointBlock({ method, path }: ApiEndpointBlockProps) {
  return (
    <div className="flex items-center gap-4 bg-ui-surface/50 border border-ui-border rounded-xl px-4 py-3 backdrop-blur-md shadow-lg shadow-primary/5 hover:border-primary/30 transition-all duration-300">
      <HttpMethodBadge method={method} size="md" />
      <code className="text-sm font-mono text-foreground tracking-tight">{path}</code>
    </div>
  );
}
