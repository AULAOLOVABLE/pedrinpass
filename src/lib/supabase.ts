const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hbovslriugwnitewnbao.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_ito0eApeRfTaOwY1mEVGtg_yt9byesH";

async function request(path: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      ...options,
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
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
