import { useState, useEffect } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
        isScrolled ? "pt-4" : "pt-8"
      )}
    >
      <nav 
        aria-label="Navegação principal" 
        className={cn(
          "flex items-center justify-between px-8 py-3 w-[95%] max-w-7xl transition-all duration-500 border border-white/5",
          isScrolled 
            ? "bg-black/60 backdrop-blur-3xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.96] border-white/10" 
            : "bg-transparent rounded-3xl"
        )}
      >
        {/* Left Section: Logo + SearchBar */}
        <div className="flex items-center gap-10">
          <Logo />
          <SearchBar />
        </div>

        {/* Right Section: NavLinks + CTA */}
        <div className="flex items-center gap-4">
          <NavLinks />
          <div className="hidden md:flex items-center">
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-bold shadow-[0_8px_30px_rgba(var(--primary),0.3)] hover:bg-primary/90 hover:shadow-[0_12px_40px_rgba(var(--primary),0.6)] hover:-translate-y-1 transition-all active:scale-95 duration-[var(--duration-normal)] ease-[cubic-bezier(0.23,1,0.32,1)]">
              Começar Agora — Grátis
            </button>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
