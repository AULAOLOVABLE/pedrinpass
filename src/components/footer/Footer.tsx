import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-ui-border py-24 bg-ui-surface/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-lg font-black tracking-tighter text-foreground uppercase mb-2">PedrinTEC</h3>
            <p className="text-muted-foreground text-[11px] max-w-xs leading-relaxed">
              Líder em infraestrutura para agentes de IA e engenharia de software de alta performance. 
              Estruturas modulares e escaláveis para o futuro digital.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-6">Plataforma</h4>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              <li><Link to="/docs/overview" className="hover:text-primary transition-colors">Doc</Link></li>
              <li><Link to="/api/connect" className="hover:text-primary transition-colors">API</Link></li>
              <li><Link to="/changelog" className="hover:text-primary transition-colors">Log</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-6">Suporte</h4>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              <li><Link to="/docs/community" className="hover:text-primary transition-colors">Comunidade</Link></li>
              <li><Link to="/docs/support" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-12 border-t border-white/5">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            © 2026 PedrinTEC · Desenvolvido por Pedrintec. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">LCP: 1.2s</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">INP: 80ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;