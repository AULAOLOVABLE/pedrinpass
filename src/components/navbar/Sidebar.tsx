import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { LayoutDashboard, BookOpen, Terminal, History, Settings, ExternalLink } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { icon: LayoutDashboard, label: "Marketplace", href: "/" },
    { icon: BookOpen, label: "Documentação", href: "/docs" },
    { icon: Terminal, label: "API", href: "/api" },
    { icon: History, label: "Log", href: "/log" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar-background border-r border-sidebar-border z-[100] hidden lg:flex flex-col p-6 gap-8">
      <div className="flex items-center gap-3 px-2">
        <Logo />
      </div>

      <nav className="flex flex-col gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-4 mb-2">Plataforma</span>
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
              )}
            >
              <link.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive ? "text-primary-foreground" : "text-primary")} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-4 mb-2">Suporte</span>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-all duration-300 group">
          <Settings className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform" />
          <span>Configurações</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-all duration-300 group">
          <ExternalLink className="w-4 h-4 text-primary" />
          <span>PedrinTEC Cloud</span>
        </button>
      </div>

      <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-2">Status do Sistema</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] text-foreground font-medium">Todos os sistemas operacionais</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;