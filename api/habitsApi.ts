import { supabase } from "@/supabase-client";

const USER_ID = 1;

export const fetchHabits = async () => {
  const { error, data } = await supabase.from("habits").select("*");

  if (error) console.log('### ERROR: fetchHabits ###', error);

  return data;
}

export const postHabit = async (payload: any) => {
  const { error } = await supabase.from("habits").insert(payload).single();

  if (error) console.log('### ERROR: postHabit ###', error);
}

