import { supabase } from "@/supabase-client";
import { CreateHabitsLogInput, HabitsLogRow } from "./types";

const USER_ID = 1;

export const fetchHabitsLog = async (month: number, year: number): Promise<HabitsLogRow[]> => {
  const firstDay = new Date(year, month, 1).toISOString().split("T")[0];
  const lastDay = new Date(year, month + 1, 0).toISOString().split("T")[0];

  const { error, data } = await supabase
    .from("habits_log")
    .select("*")
    .gte("date", firstDay)
    .lt("date", lastDay)
    .eq('user_id', USER_ID);

  if (error) console.log('### ERROR: fetchHabitsLog ###', error);

  return data as HabitsLogRow[];
}

export const postHabitLog = async (payload: CreateHabitsLogInput) => {
  const { error } = await supabase.from("habits_log").insert(payload).single();

  if (error) console.log('### ERROR: postHabitLog ###', error);
}