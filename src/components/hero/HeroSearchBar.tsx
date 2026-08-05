import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import { cn } from "@/lib/utils";

const HeroSearchBar = () => {
  const { openSearch } = useSearch();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      onClick={openSearch}
      className={cn(
        "group relative flex items-center w-full h-16 md:h-20 px-6 rounded-2xl cursor-text transition-all duration-300",
        "bg-white/[0.03] border border-white/10 backdrop-blur-xl",
        "hover:bg-white/[0.06] hover:border-primary/40 hover:shadow-[0_0_40px_rgba(var(--primary),0.1)]",
        "search-bar-gradient-border"
      )}
    >
      <Search className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-primary" />
      
      <div className="flex-1 ml-4 text-left">
        <span className="block text-lg font-medium text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
          O que você deseja construir hoje?
        </span>
        <span className="hidden md:block text-[10px] eyebrow !text-muted-foreground/40 mt-0.5">
          Pressione <kbd className="font-sans">⌘</kbd> K para buscar
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center h-10 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 active:scale-95">
        Buscar Agora
      </div>
    </div>
  );
};

export default HeroSearchBar;