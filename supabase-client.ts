import { createClient } from "@supabase/supabase-js";

const projectUrl = process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL ?? "";
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(projectUrl, anonKey);
