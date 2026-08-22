import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  label: string;
  href: string;
}

const links: NavLinkItem[] = [
  { label: "Doc", href: "/docs/overview" },
  { label: "API", href: "/api/connect" },
  { label: "Log", href: "/changelog" },
];

const NavLinks = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("/docs")) return location.pathname.startsWith("/docs");
    if (href.startsWith("/api")) return location.pathname.startsWith("/api");
    if (href.startsWith("/changelog")) return location.pathname.startsWith("/changelog");
    return location.pathname === href;
  };

  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Links de navegação">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className={cn(
            "px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95",
            isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
