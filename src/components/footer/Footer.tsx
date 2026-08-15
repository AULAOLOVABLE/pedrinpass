import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black tracking-tighter text-foreground uppercase mb-4">PedrinTEC</h3>
            <p className="text-muted-foreground text-[13px] max-w-xs leading-relaxed">
              Líder em infraestrutura para agentes de IA e engenharia de software de alta performance. 
              [PREENCHER] endereço ou detalhes adicionais.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/docs/overview" className="hover:text-primary transition-colors">Documentação</Link></li>
              <li><Link to="/api/connect" className="hover:text-primary transition-colors">Referência API</Link></li>
              <li><Link to="/changelog" className="hover:text-primary transition-colors">Novidades</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/docs/community" className="hover:text-primary transition-colors">Comunidade</Link></li>
              <li><Link to="/docs/support" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-12 border-t border-white/5">
          <p className="text-sm text-muted-foreground">
            © 2026 PedrinTEC · Desenvolvido por Pedrintec. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="text-xs eyebrow !text-muted-foreground">LCP: 1.2s</span>
            <span className="text-xs eyebrow !text-muted-foreground">INP: 80ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;