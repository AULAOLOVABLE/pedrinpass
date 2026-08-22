import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg" aria-label="PedrinTEC Home">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary shadow-lg shadow-primary/20 border border-primary/20 group-hover:scale-105 transition-transform">
          <Terminal className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-black tracking-tighter text-foreground uppercase">PedrinTEC</span>
      </div>
    </Link>
  );
};

export default Logo;
