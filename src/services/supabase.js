import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqhaoryyyjorekwtlvjj.supabase.co";
const supabaseKey = "sb_publishable_mDInha8MaG8OkbDb1DZZIg_cVjR_EIB";

export const supabase = createClient(supabaseUrl, supabaseKey);