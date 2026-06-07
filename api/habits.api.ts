import { supabase } from "@/supabase-client";
import { CreateHabitInput, HabitRow } from "./types";

const USER_ID = 1;

export const fetchHabits = async (): Promise<HabitRow[]> => {
  const { error, data } = await supabase.from("habits").select("*");

  if (error) console.log('### ERROR: fetchHabits ###', error);

  return data as HabitRow[];
}

export const postHabit = async (payload: CreateHabitInput) => {
  const { error } = await supabase.from("habits").insert(payload).single();

  if (error) console.log('### ERROR: postHabit ###', error);
}

