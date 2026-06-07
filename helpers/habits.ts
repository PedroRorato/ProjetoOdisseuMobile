import { HabitRow, HabitsLogRow } from "@/api/types";
import { Habit } from "@/types/habit";

export const groupHabitsLogData = (habitsData: HabitRow[], logsData: HabitsLogRow[]): Habit[] => {
  const habitsWithLogs = habitsData.map((habit) => {
    const logs = logsData.filter(item => item.habit_id === habit.id);
    return {...habit, logs};
  });

  return habitsWithLogs;
}

export const isCheckedHabitCard = (habitData: Habit, date: string): boolean => {
  const isChecked = habitData.logs.find(log => log.date === date);
  return !!isChecked;
}