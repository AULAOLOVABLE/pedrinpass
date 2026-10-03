import { useEffect, useState, type FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { Loader2, LogOut, RefreshCw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { getAdminAuditLog, getAdminOrders, getAdminSession, isAdmin, signInAdmin, signOutAdmin, updateOrderStatus } from "@/lib/supabase";

type Order = {
  id: string; customer_name: string; customer_phone: string; items: Array<{ pizza_id: string; quantity: number; observations?: string }>;
  total_amount: number; delivery_time: string; order_type: "delivery" | "pickup"; payment_method: string; status: string; created_at: string;
};
type Audit = { id: string; action: string; target_table: string; target_id: string; created_at: string; actor_user_id: string };

const statuses = ["pending", "confirmed", "preparing", "out_for_delivery", "completed", "cancelled"];

export default function Admin() {
  const [session, setSession] = useState(getAdminSession());
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [audit, setAudit] = useState<Audit[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const ok = await isAdmin();
    setAuthorized(ok);
    if (ok) {
      const [ordersResult, auditResult] = await Promise.all([getAdminOrders(), getAdminAuditLog()]);
      if (ordersResult.error) toast.error("Não foi possível carregar os pedidos.");
      else setOrders((ordersResult.data || []) as Order[]);
      if (!auditResult.error) setAudit((auditResult.data || []) as Audit[]);
    }
    setLoading(false);
  };

  useEffect(() => { if (session) load(); else setAuthorized(false); }, [session]);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const result = await signInAdmin(email.trim(), password);
    if (result.error) {
      toast.error("E-mail ou senha inválidos.");
      setLoading(false);
      return;
    }
    setSession(result.data);
    setPassword("");
    setLoading(false);
  };

  if (!session) return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
        <ShieldCheck className="mb-5" size={34} />
        <h1 className="text-2xl font-black">Painel da pizzaria</h1>
        <p className="mt-2 text-sm text-white/60">Área restrita. O acesso é validado no servidor pelo papel do usuário.</p>
        <form onSubmit={login} className="mt-7 space-y-4">
          <input required type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} placeholder="E-mail" className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none ring-orange-400 focus:ring-2" />
          <input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Senha" className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none ring-orange-400 focus:ring-2" />
          <button disabled={loading} className="w-full rounded-xl bg-orange-500 px-4 py-3 font-bold disabled:opacity-50">{loading ? "Entrando..." : "Entrar"}</button>
        </form>
      </div>
    </main>
  );

  if (authorized === false) return <Navigate to="/" replace />;
  if (authorized === null) return <main className="grid min-h-screen place-items-center"><Loader2 className="animate-spin" /></main>;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-8">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-widest text-orange-400">Admin</p><h1 className="text-3xl font-black">Pedidos</h1></div>
        <div className="flex gap-2">
          <button onClick={load} disabled={loading} className="rounded-xl bg-white/10 p-3"><RefreshCw size={18} className={loading ? "animate-spin" : ""}/></button>
          <button onClick={()=>{signOutAdmin();setSession(null);}} className="rounded-xl bg-white/10 p-3"><LogOut size={18}/></button>
        </div>
      </header>
      <section className="mx-auto mt-6 grid max-w-7xl gap-5 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {orders.length === 0 ? <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/60">Nenhum pedido recebido.</div> :
          orders.map(order => <article key={order.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><h2 className="font-bold">{order.customer_name}</h2><p className="text-sm text-white/50">{order.customer_phone}</p><p className="mt-1 text-xs font-bold text-orange-300">{order.order_type === "pickup" ? "🏪 Retirada no balcão" : "🛵 Entrega"}</p></div>
              <select value={order.status} onChange={async e=>{const next=e.target.value; const r=await updateOrderStatus(order.id,next); if(r.error){toast.error("Não foi possível atualizar.");return;} setOrders(xs=>xs.map(x=>x.id===order.id?{...x,status:next}:x)); toast.success("Status atualizado."); setAudit(await getAdminAuditLog().then(x=>(x.data||[]) as Audit[]));}} className="rounded-lg bg-slate-900 px-3 py-2 text-sm">
                {statuses.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="mt-4 space-y-2 text-sm">{(order.items||[]).map((item,i)=><div key={i} className="rounded-lg bg-black/20 p-3"><b>{item.quantity}x</b> {item.pizza_id}<div className="text-white/50">{item.observations || "Sem observações"}</div></div>)}</div>
            <div className="mt-4 flex justify-between text-sm"><span>{new Date(order.delivery_time).toLocaleString("pt-BR")}</span><b>R$ {Number(order.total_amount).toFixed(2).replace(".", ",")}</b></div>
          </article>)}
        </div>
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 h-fit">
          <h2 className="font-bold">Auditoria administrativa</h2>
          <div className="mt-4 max-h-[70vh] space-y-3 overflow-auto text-xs">
            {audit.map(item=><div key={item.id} className="border-b border-white/10 pb-3"><b>{item.action}</b><div className="text-white/40">{new Date(item.created_at).toLocaleString("pt-BR")}</div><div className="break-all text-white/30">{item.target_id}</div></div>)}
          </div>
        </aside>
      </section>
    </main>
  );
}