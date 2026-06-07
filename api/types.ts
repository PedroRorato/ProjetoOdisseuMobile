import { Database } from "./supabase.types";

// Habits
export type HabitRow = Database['public']['Tables']['habits']['Row']
export type CreateHabitInput = Database['public']['Tables']['habits']['Insert']
export type UpdateHabitInput = Database['public']['Tables']['habits']['Update']

// HabitsLog
export type HabitsLogRow = Database['public']['Tables']['habits_log']['Row']
export type CreateHabitsLogInput = Database['public']['Tables']['habits_log']['Insert']
export type UpdateHabitsLogInput = Database['public']['Tables']['habits_log']['Update']