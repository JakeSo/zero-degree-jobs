import { createClient } from '@supabase/supabase-js';

const key = process.env.REACT_APP_SUPABASE_SR_KEY != null ? process.env.REACT_APP_SUPABASE_SR_KEY : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwamFjY2hwcXdrbGh6Ym51dXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1Nzc0NzIsImV4cCI6MjAxMTE1MzQ3Mn0.5z8tFUGmGHSlmPVL-M2pZdDt84WOpdm-JITR0ATdZDY"
const supabase = createClient("https://kpjacchpqwklhzbnuuyx.supabase.co", key);

export default supabase;
