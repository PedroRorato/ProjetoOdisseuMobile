import { HabitRow, HabitsLogRow } from "@/api/types";

export type Habit = HabitRow & {
  logs: HabitsLogRow[];
}

export type HabitGridCellDay = {
  date: Date;
  day: number;
  weekday: number;
  isChecked: boolean;
};

export type HabitGridCellData = HabitGridCellDay | null;