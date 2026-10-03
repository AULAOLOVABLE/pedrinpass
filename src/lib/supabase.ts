const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hbovslriugwnitewnbao.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_ito0eApeRfTaOwY1mEVGtg_yt9byesH";
const SESSION_KEY = "pedrinpass-admin-session";

type Session = { access_token: string; refresh_token?: string; user?: { id: string; email?: string } };

async function request(path: string, options: RequestInit = {}, token?: string) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      ...options,
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${token || SUPABASE_KEY}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    const text = await response.text();
    if (!response.ok) return { data: null, error: new Error(text || `HTTP ${response.status}`) };
    return { data: text ? JSON.parse(text) : null, error: null };
  } catch (error) {
    return { data: null, error: error instanceof Error ? error : new Error("Supabase request failed") };
  }
}

export async function signInAdmin(email: string, password: string) {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) return { data: null, error: new Error(data.error_description || data.msg || "Login inválido") };
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  return { data: data as Session, error: null };
}

export function getAdminSession(): Session | null {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; }
}

export function signOutAdmin() {
  const session = getAdminSession();
  localStorage.removeItem(SESSION_KEY);
  if (session?.access_token) fetch(`${SUPABASE_URL}/auth/v1/logout`, { method: "POST", headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${session.access_token}` } }).catch(() => {});
}

export async function isAdmin() {
  const session = getAdminSession();
  if (!session?.access_token) return false;
  const result = await request("rpc/is_admin", { method: "POST", body: "{}" }, session.access_token);
  return result.data === true;
}

export async function getAdminOrders() {
  const session = getAdminSession();
  if (!session?.access_token) return { data: null, error: new Error("Não autenticado") };
  return request("orders?select=*&order=created_at.desc", {}, session.access_token);
}

export async function updateOrderStatus(id: string, status: string) {
  const session = getAdminSession();
  if (!session?.access_token) return { data: null, error: new Error("Não autenticado") };
  return request(`orders?id=eq.${encodeURIComponent(id)}`, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ status }) }, session.access_token);
}

export async function getAdminAuditLog() {
  const session = getAdminSession();
  if (!session?.access_token) return { data: null, error: new Error("Não autenticado") };
  return request("admin_audit_log?select=id,action,target_table,target_id,created_at,actor_user_id&order=created_at.desc&limit=100", {}, session.access_token);
}

export const supabase = {
  from(table: string) {
    const filters: string[] = [];
    let orderBy = "";
    let selectColumns = "*";
    const query = {
      select(columns = "*") { selectColumns = columns; return query; },
      eq(column: string, value: string | boolean) { filters.push(`${encodeURIComponent(column)}=eq.${encodeURIComponent(String(value))}`); return query; },
      order(column: string) { orderBy = `order=${encodeURIComponent(column)}.asc`; return query; },
      async insert(values: Record<string, unknown>) { return request(table, { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify(values) }); },
      async execute() {
        const params = [...filters, orderBy, `select=${encodeURIComponent(selectColumns)}`].filter(Boolean).join("&");
        return request(`${table}?${params}`);
      },
    };
    return query;
  },
};
