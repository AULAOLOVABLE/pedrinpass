import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import Logo from "./Logo";
import { useSearch } from "@/contexts/SearchContext";

const navLinks = [
  { name: "Docs", path: "/docs" },
  { name: "API", path: "/api" },
  { name: "Changelog", path: "/changelog" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`relative flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-700 ${
          isScrolled 
            ? 'bg-background/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center gap-12">
            <Link to="/" className="relative z-10 group">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-primary ${
                    pathname.startsWith(link.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={openSearch}
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              <Search className="w-4 h-4" />
            </button>
            
            <Link 
              to="/docs" 
              className="hidden md:flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-[9px] font-black uppercase tracking-widest border border-primary/20 transition-all duration-500 group"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button 
              className="md:hidden p-3 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-ui-border p-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-black uppercase tracking-tighter text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/docs" 
                className="w-full py-5 bg-primary text-primary-foreground text-center rounded-2xl font-black text-xs uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
