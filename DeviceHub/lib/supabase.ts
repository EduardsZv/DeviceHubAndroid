import {createClient} from "@supabase/supabase-js";
import {YOUR_REACT_NATIVE_APP_SUPABASE_ANON_KEY, YOUR_REACT_NATIVE_APP_SUPABASE_URL} from "@/constants";

export const supabase = createClient(YOUR_REACT_NATIVE_APP_SUPABASE_URL, YOUR_REACT_NATIVE_APP_SUPABASE_ANON_KEY);