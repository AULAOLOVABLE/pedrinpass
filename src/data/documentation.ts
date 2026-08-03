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
    id: "getting-started",
    title: "Primeiros Passos",
    items: [
      { id: "overview", title: "Visão Geral", href: "/docs/overview", icon: FileText },
      { id: "workspace", title: "Configure Seu Workspace", href: "/docs/workspace", icon: Wrench },
      { id: "sandbox", title: "Sandbox vs. Produção", href: "/docs/sandbox", icon: Layers },
      { id: "account-setup", title: "Configuração da Conta", href: "/docs/account-setup", icon: Settings },
      { id: "features", title: "Principais Recursos", href: "/docs/features", icon: Sparkles },
    ],
  },
  {
    id: "products",
    title: "Produtos e Assinaturas",
    items: [
      { id: "coupons", title: "Cupons e Descontos", href: "/docs/coupons", icon: Tag },
      { id: "pricing", title: "Modelos de Precificação", href: "/docs/pricing", icon: DollarSign },
      { id: "products", title: "Criando um Produto", href: "/docs/products", icon: Package },
      { id: "subscriptions", title: "Assinaturas", href: "/docs/subscriptions", icon: RefreshCw },
      { id: "failed-payments", title: "Pagamentos Falhos", href: "/docs/failed-payments", icon: AlertTriangle },
    ],
  },
  {
    id: "security",
    title: "Segurança",
    items: [
      { id: "encryption", title: "Segurança e Criptografia", href: "/docs/encryption", icon: Shield },
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
