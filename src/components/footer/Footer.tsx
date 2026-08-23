import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Logo from "../navbar/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-ui-border pt-32 pb-16 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground text-[11px] max-w-sm leading-relaxed">
              Engenharia de software, IA e automação inteligente. Transformando complexidade em produtos reais.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-xl border border-ui-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground mb-6">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/docs" className="text-muted-foreground hover:text-primary text-xs transition-colors">Documentação</Link></li>
              <li><Link to="/api" className="text-muted-foreground hover:text-primary text-xs transition-colors">API Reference</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-primary text-xs transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Termos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ui-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            © {currentYear} PedrinTEC. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-muted-foreground uppercase tracking-widest">Desenvolvido por</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-primary">Pedrintec</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;