import { HabitRow, HabitsLogRow } from "@/api/types";

export type Habit = HabitRow & {
  logs: HabitsLogRow[];
}