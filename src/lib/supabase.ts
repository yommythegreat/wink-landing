import { createClient } from "@supabase/supabase-js";

// Public-anon Supabase client for the marketing site. Only used by the
// WaitlistForm (INSERT into waitlist_signups). Anon key is public by
// design — the table's RLS policy allows inserts from anon; reads are
// service-role only, so this key never exposes any customer data.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(url, anonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
