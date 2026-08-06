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
          "flex items-center justify-between px-8 py-3 w-[95%] max-w-[1400px] transition-all duration-700 border border-white/5",
          isScrolled 
            ? "bg-[#121212]/80 backdrop-blur-2xl rounded-full shadow-2xl scale-[0.98] border-white/10" 
            : "bg-transparent rounded-full"
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
            <button className="bg-[#E0E0E0] text-[#121212] px-6 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase hover:bg-white transition-all active:scale-95 duration-300">
              Começar Agora
            </button>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
