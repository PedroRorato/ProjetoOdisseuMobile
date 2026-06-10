import { HabitsLogRow } from "@/api/types";
import { Habit } from "@/types/habit";

export type HabitStore = {
  habits: Habit[],
  loading: boolean,
  initializeHabitsData: () => Promise<void>,
  updateHabits: (newLog: HabitsLogRow) => void,
}