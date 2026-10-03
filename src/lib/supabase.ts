import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://hbovslriugwnitewnbao.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_ito0eApeRfTaOwY1mEVGtg_yt9byesH";

export const supabase = createClient(supabaseUrl, supabaseKey);