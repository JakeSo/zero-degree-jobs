import { createClient } from '@supabase/supabase-js';

const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
const url = import.meta.env.VITE_SUPABASE_URL;
const supabase = createClient(url, key);

export default supabase;
