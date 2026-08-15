import {
  FileText,
  Wrench,
  Layers,
  Settings,
  Sparkles,
  Tag,
  DollarSign,
  Package,
  RefreshCw,
  AlertTriangle,
  Shield,
  MessageSquare,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
  isNew?: boolean;
}

export interface NavGroup {
  id: string;
  title: string;
  items: NavItem[];
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: "h2" | "h3";
}

export const navigationGroups: NavGroup[] = [
  {
    id: "marketplace",
    title: "Marketplace",
    items: [
      { id: "extensions", title: "Extensões", href: "/docs/extensions", icon: Wrench },
      { id: "prompts", title: "Prompts", href: "/docs/prompts", icon: Sparkles },
      { id: "templates", title: "Templates", href: "/docs/templates", icon: Layers },
      { id: "workflows", title: "Workflows", href: "/docs/workflows", icon: RefreshCw },
      { id: "motion", title: "Motion Design", href: "/docs/motion-design", icon: Sparkles },
      { id: "consultoria", title: "Consultoria Executiva", href: "/docs/consultoria-executiva", icon: Layers },
    ],
  },
  {
    id: "categories",
    title: "Categorias",
    items: [
      { id: "chatgpt", title: "ChatGPT", href: "/docs/chatgpt", icon: MessageSquare },
      { id: "lovable", title: "Lovable", href: "/docs/lovable", icon: Sparkles },
      { id: "claude", title: "Claude", href: "/docs/claude", icon: Shield },
      { id: "cursor", title: "Cursor", href: "/docs/cursor", icon: Terminal },
      { id: "launches", title: "Lançamentos", href: "/changelog", icon: Tag },
    ],
  },
];

export const tableOfContents: TableOfContentsItem[] = [
  { id: "introduction", title: "Introdução", level: "h2" },
  { id: "creating-your-account", title: "Criando Sua Conta", level: "h2" },
  { id: "sign-up-process", title: "Processo de Cadastro", level: "h3" },
  { id: "account-verification", title: "Verificação da Conta", level: "h3" },
  { id: "workspace-details", title: "Detalhes do Workspace e do Projeto", level: "h2" },
  { id: "adding-a-workspace", title: "Adicionando um Workspace", level: "h3" },
  { id: "supported-regions", title: "Regiões Suportadas", level: "h3" },
  { id: "configuration", title: "Configuração", level: "h2" },
  { id: "security-setup", title: "Configuração de Segurança", level: "h2" },
  { id: "two-factor-auth", title: "Autenticação de Dois Fatores", level: "h3" },
  { id: "recovery-options", title: "Configurando Opções de Recuperação", level: "h3" },
  { id: "notifications", title: "Notificações e Preferências", level: "h2" },
  { id: "reviewing-setup", title: "Revisando Sua Configuração", level: "h2" },
  { id: "checklist", title: "Checklist para uma Conta Completa", level: "h3" },
  { id: "testing-sandbox", title: "Testando no Modo Sandbox", level: "h3" },
];

export const documentationContent = {
  title: "Configuração da Conta",
  description: "Aprenda a configurar sua conta e seu workspace para um uso ideal.",
  breadcrumb: ["Primeiros Passos", "Configuração da Conta"],
};
