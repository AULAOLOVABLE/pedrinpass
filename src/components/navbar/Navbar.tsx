import { useState, useEffect } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import { MagneticButton } from "../motion";

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
          "flex items-center justify-between px-8 py-3 w-[95%] max-w-[1400px] transition-all duration-700 border border-white/5",
          isScrolled 
            ? "bg-ui-surface/60 backdrop-blur-3xl rounded-full shadow-2xl scale-[0.98] border-primary/20" 
            : "bg-transparent rounded-full border-transparent"
        )}
      >
        {/* Left Section: Mobile Logo + SearchBar */}
        <div className="flex items-center gap-10">
          <div className="lg:hidden">
            <Logo />
          </div>
          <SearchBar />
        </div>

        {/* Right Section: NavLinks + CTA */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <NavLinks />
          </div>
          <div className="hidden md:flex items-center">
            <MagneticButton>
              <button className="bg-primary text-primary-foreground px-10 py-3.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 transition-all duration-300 border border-primary/20">
                Acessar Portal
              </button>
            </MagneticButton>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
