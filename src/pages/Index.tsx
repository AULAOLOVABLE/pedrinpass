import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ShoppingBag, Plus, Minus, Trash2, X, Clock, MessageCircle, Pizza, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

type PizzaItem = { id: string; name: string; description: string; price: number; image_url?: string | null };\ntype DrinkItem = PizzaItem;\ntype CatalogItem = PizzaItem & { category: "pizza" | "drink" };
type CartItem = PizzaItem & { quantity: number; observations: string };

const FALLBACK_PIZZA_IMAGE = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80&fm=webp";

const CART_KEY = "pedrinpass-cart";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "62982203854";

const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const getMinDateTime = () => {
  const date = new Date(Date.now() + 30 * 60 * 1000);
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 16);
};

const Index = () => {
  const [pizzas, setPizzas] = useState<PizzaItem[]>([]);\n  const [drinks, setDrinks] = useState<DrinkItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; }
  });
  const [selected, setSelected] = useState<PizzaItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "", deliveryTime: "", payment: "pix", orderType: "delivery", terms: false });

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("pizzas").select("id,name,description,price,image_url").eq("is_available", true).order("created_at").execute();
      if (error) toast.error("Não foi possível carregar o catálogo.");
      setPizzas((data || []) as PizzaItem[]);
      setLoading(false);
    };
    load();
  }, []);

  const addToCart = (pizza: PizzaItem, quantity = 1, observations = "") => {
    setCart((current) => {
      const found = current.find((item) => item.id === pizza.id && item.observations === observations);
      if (found) return current.map((item) => item === found ? { ...item, quantity: Math.min(10, item.quantity + quantity) } : item);
      return [...current, { ...pizza, quantity: Math.min(10, quantity), observations }];
    });
    setSelected(null);
    setCartOpen(true);
  };

  const updateQty = (index: number, delta: number) => setCart((current) => current.map((item, i) => i === index ? { ...item, quantity: item.quantity + delta } : item).filter(item => item.quantity > 0));
  const removeItem = (index: number) => setCart((current) => current.filter((_, i) => i !== index));

  const openCheckout = () => {
    if (!cart.length) return toast.error("Seu carrinho está vazio.");
    setCartOpen(false);
    setCheckoutOpen(true);
    setCustomer((c) => ({ ...c, deliveryTime: c.deliveryTime || getMinDateTime() }));
  };

  const finalize = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!cart.length) return toast.error("Adicione pelo menos uma pizza.");
    if (customer.name.trim().length < 2) return toast.error("Informe seu nome.");
    if (!/^\+?[0-9()\s-]{8,20}$/.test(customer.phone.trim())) return toast.error("Informe um telefone válido.");
    if (!customer.deliveryTime || new Date(customer.deliveryTime).getTime() < Date.now() + 30 * 60 * 1000) return toast.error("Escolha um horário com pelo menos 30 minutos de antecedência.");
    if (!customer.terms) return toast.error("Aceite os termos para continuar.");
    const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    if (whatsappNumber.length < 10) return toast.error("O WhatsApp da pizzaria ainda não foi configurado.");

    setSending(true);
    const items = cart.map(({ id, quantity, observations }) => ({ pizza_id: id, quantity, observations }));
    const { error } = await supabase.from("orders").insert({
      customer_name: customer.name.trim(),
      customer_phone: customer.phone.trim(),
      items,
      total_amount: Number(total.toFixed(2)),
      delivery_time: new Date(customer.deliveryTime).toISOString(),
      payment_method: customer.payment,
      status: "pending",
    });

    if (error) {
      console.error(error);
      setSending(false);
      return toast.error("Falha ao enviar pedido. Tente novamente.");
    }

    const lines = [
      "🍕 *NOVO PEDIDO*",
      "",
      `👤 Cliente: ${customer.name.trim()}`,
      `📱 Telefone: ${customer.phone.trim()}`,
      `📍 Atendimento: ${customer.orderType === "pickup" ? "Retirada no balcão" : "Entrega"}`,\n      `🕐 Horário: ${new Date(customer.deliveryTime).toLocaleString("pt-BR")}`,
      `💳 Pagamento: ${customer.payment === "pix" ? "PIX" : customer.payment === "card" ? "Cartão" : "Dinheiro"}`,
      "",
      ...cart.map((item) => `• ${item.quantity}x ${item.name} — ${money(item.price * item.quantity)}${item.observations ? `\n  Obs.: ${item.observations}` : ""}`),
      "",
      `💰 *Total: ${money(total)}*`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    localStorage.removeItem(CART_KEY);
    setCart([]);
    setSending(false);
    setCheckoutOpen(false);
    toast.success("Pedido registrado! Abrindo o WhatsApp...");
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#25160e]">
      <header className="sticky top-0 z-30 border-b border-orange-100/80 bg-[#fffaf4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="/" className="flex items-center gap-2 font-black tracking-tight"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200"><Pizza size={21}/></span><span>Pedrin Pizzaria</span></a>
          <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 rounded-full bg-[#25160e] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600">
            <ShoppingBag size={18}/> Carrinho {cart.length > 0 && <span className="grid min-w-6 h-6 place-items-center rounded-full bg-orange-500 px-1 text-xs">{cart.reduce((s,i)=>s+i.quantity,0)}</span>}
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-[.18em] text-orange-700">Feita para chegar quente</span>
              <h1 className="max-w-xl text-5xl font-black leading-[.95] tracking-[-.05em] md:text-7xl">A pizza que pede <span className="text-orange-500">mais uma fatia.</span></h1>
              <p className="mt-5 max-w-lg text-lg leading-7 text-[#6f584c]">Escolha seus sabores, monte o pedido e finalize pelo WhatsApp. Rápido, simples e sem complicação.</p>
              <button onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })} className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"><MessageCircle size={19}/> Pedir pelo WhatsApp</button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-orange-100 shadow-2xl shadow-orange-100">
              <img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1100&q=85&fm=webp" alt="Pizza artesanal" loading="eager" decoding="async" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur"><p className="text-xs font-bold uppercase tracking-widest text-orange-600">Pedido pelo WhatsApp</p><p className="mt-1 font-black">Do forno para sua mesa 🍕</p></div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.2em] text-orange-600">Cardápio</p><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Escolha seu sabor</h2></div><span className="hidden text-sm text-[#806b5e] md:block">Feito na hora • ingredientes selecionados</span></div>
          {loading ? <div className="grid place-items-center py-20"><Loader2 className="animate-spin text-orange-500" /></div> : pizzas.length === 0 ? <div className="rounded-3xl border border-dashed border-orange-200 bg-white p-12 text-center"><Pizza className="mx-auto text-orange-400"/><p className="mt-3 font-bold">Nenhuma pizza disponível no momento.</p></div> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{pizzas.map(pizza => <article key={pizza.id} className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100"><img src={pizza.image_url || FALLBACK_PIZZA_IMAGE} alt={pizza.name} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover"/><div className="p-5"><div className="flex items-start justify-between gap-3"><h3 className="text-xl font-black">{pizza.name}</h3><span className="whitespace-nowrap text-lg font-black text-orange-600">{money(Number(pizza.price))}</span></div><p className="mt-2 min-h-12 text-sm leading-5 text-[#806b5e]">{pizza.description}</p><button onClick={()=>setSelected(pizza)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25160e] py-3.5 text-sm font-black text-white transition hover:bg-orange-500"><Plus size={17}/> Adicionar</button></div></article>)}</div>}
        </section>
      </main>

      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onMouseDown={()=>setSelected(null)}><div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl" onMouseDown={e=>e.stopPropagation()}><div className="flex items-center justify-between"><h3 className="text-2xl font-black">{selected.name}</h3><button type="button" aria-label="Fechar produto" onClick={()=>setSelected(null)}><X/></button></div><p className="mt-2 text-sm text-[#806b5e]">{selected.description}</p><AddItemForm pizza={selected} onAdd={addToCart}/></div></div>}

      {cartOpen && <div className="fixed inset-0 z-50 bg-black/50"><aside className="ml-auto flex h-full w-full max-w-lg flex-col bg-[#fffaf4] shadow-2xl"><div className="flex items-center justify-between border-b border-orange-100 p-5"><div><p className="text-xs font-black uppercase tracking-widest text-orange-600">Seu pedido</p><h2 className="text-2xl font-black">Carrinho</h2></div><button type="button" aria-label="Fechar carrinho" onClick={()=>setCartOpen(false)}><X/></button></div><div className="flex-1 overflow-y-auto p-5">{cart.length===0 ? <div className="grid h-full place-items-center text-center"><div><ShoppingBag className="mx-auto text-orange-400"/><p className="mt-3 font-bold">Seu carrinho está vazio.</p></div></div> : <div className="space-y-4">{cart.map((item,i)=><div key={i} className="rounded-2xl border border-orange-100 bg-white p-4"><div className="flex gap-3"><img src={item.image_url || FALLBACK_PIZZA_IMAGE} alt="" alt={item.name} loading="lazy" decoding="async" className="h-16 w-16 rounded-xl object-cover"/><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><p className="font-black">{item.name}</p><button onClick={()=>removeItem(i)} className="text-[#9c7d6b] hover:text-red-500"><Trash2 size={16}/></button></div><p className="text-sm font-bold text-orange-600">{money(item.price * item.quantity)}</p>{item.observations && <p className="mt-1 text-xs text-[#806b5e]">Obs.: {item.observations}</p>}<div className="mt-3 inline-flex items-center gap-3 rounded-full bg-orange-50 px-2 py-1"><button onClick={()=>updateQty(i,-1)} className="grid h-7 w-7 place-items-center rounded-full bg-white"><Minus size={14}/></button><b className="text-sm">{item.quantity}</b><button onClick={()=>updateQty(i,1)} className="grid h-7 w-7 place-items-center rounded-full bg-white"><Plus size={14}/></button></div></div></div></div>)}</div>}</div><div className="border-t border-orange-100 bg-white p-5"><div className="mb-4 flex justify-between text-lg font-black"><span>Total</span><span className="text-orange-600">{money(total)}</span></div><div className="grid grid-cols-2 gap-3"><button onClick={()=>{setCart([]);setCartOpen(false)}} className="rounded-2xl border border-orange-200 py-3 font-bold">Cancelar</button><button disabled={!cart.length} onClick={openCheckout} className="rounded-2xl bg-orange-500 py-3 font-black text-white disabled:opacity-50">Finalizar</button></div></div></aside></div>}

      {checkoutOpen && <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/50 p-4"><form onSubmit={finalize} className="my-8 w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"><div className="flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-widest text-orange-600">Último passo</p><h2 className="text-2xl font-black">Confirmar pedido</h2></div><button type="button" aria-label="Fechar checkout" onClick={()=>setCheckoutOpen(false)}><X/></button></div><div className="mt-6 space-y-4"><Field label="Nome"><input required minLength={2} value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} placeholder="Seu nome" autoComplete="name" /></Field><Field label="Telefone"><input required value={customer.phone} onChange={e=>setCustomer({...customer,phone:e.target.value})} placeholder="(00) 00000-0000" inputMode="tel" autoComplete="tel" /></Field><Field label="Retirada ou entrega"><div className="grid grid-cols-2 gap-3"><label className={`rounded-2xl border p-4 ${customer.orderType === "delivery" ? "border-orange-500 bg-orange-50" : "border-orange-100"}`}><input type="radio" name="orderType" value="delivery" checked={customer.orderType === "delivery"} onChange={e=>setCustomer({...customer,orderType:e.target.value})} className="mr-2 accent-orange-500"/>Entrega</label><label className={`rounded-2xl border p-4 ${customer.orderType === "pickup" ? "border-orange-500 bg-orange-50" : "border-orange-100"}`}><input type="radio" name="orderType" value="pickup" checked={customer.orderType === "pickup"} onChange={e=>setCustomer({...customer,orderType:e.target.value})} className="mr-2 accent-orange-500"/>Balcão</label></div></Field><Field label="Horário"><div className="relative"><Clock className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-orange-500"/><input required type="datetime-local" min={getMinDateTime()} value={customer.deliveryTime} onChange={e=>setCustomer({...customer,deliveryTime:e.target.value})} className="pl-10"/></div></Field><Field label="Forma de pagamento"><select value={customer.payment} onChange={e=>setCustomer({...customer,payment:e.target.value})}><option value="pix">PIX</option><option value="card">Cartão</option><option value="cash">Dinheiro</option></select></Field><label className="flex gap-3 rounded-2xl bg-orange-50 p-4 text-sm"><input type="checkbox" checked={customer.terms} onChange={e=>setCustomer({...customer,terms:e.target.checked})} className="mt-1 accent-orange-500"/><span>Aceito os termos e confirmo que os dados informados serão usados para processar este pedido.</span></label></div><div className="mt-6 rounded-2xl bg-[#fff7ed] p-4"><div className="flex justify-between font-black"><span>Total</span><span className="text-orange-600">{money(total)}</span></div></div><button disabled={sending} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 py-4 font-black text-white shadow-lg shadow-orange-200 disabled:opacity-60">{sending ? <><Loader2 className="animate-spin"/> Enviando...</> : <><MessageCircle/> Finalizar pedido no WhatsApp</>}</button></form></div>}
    </div>
  );
};

const Field = ({label, children}:{label:string;children:ReactNode}) => <label className="block"><span className="mb-1.5 block text-sm font-bold">{label}</span>{children}</label>;

const AddItemForm = ({pizza,onAdd}:{pizza:PizzaItem;onAdd:(p:PizzaItem,q:number,o:string)=>void}) => {
  const [quantity,setQuantity]=useState(1); const [obs,setObs]=useState("");
  return <div className="mt-6"><label className="text-sm font-bold">Observações<input maxLength={200} value={obs} onChange={e=>setObs(e.target.value)} placeholder="Ex.: sem cebola" maxLength={200} className="mt-1.5"/></label><div className="mt-4 flex items-center justify-between"><div className="inline-flex items-center gap-4 rounded-full bg-orange-50 p-1"><button type="button" onClick={()=>setQuantity(Math.max(1,quantity-1))} className="grid h-9 w-9 place-items-center rounded-full bg-white"><Minus size={15}/></button><b>{quantity}</b><button type="button" onClick={()=>setQuantity(Math.min(10,quantity+1))} className="grid h-9 w-9 place-items-center rounded-full bg-white"><Plus size={15}/></button></div><b className="text-xl text-orange-600">{money(pizza.price*quantity)}</b></div><button type="button" onClick={()=>onAdd(pizza,quantity,obs.trim())} className="mt-5 w-full rounded-2xl bg-orange-500 py-4 font-black text-white">Adicionar ao carrinho</button></div>
};

export default Index;