import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg" aria-label="PedrinTEC Home">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow">
          <Compass className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-black tracking-tighter text-foreground">PedrinTEC</span>
      </div>
    </Link>
  );
};

export default Logo;
