import { HabitsLogRow } from "@/api/types";
import { Habit, HabitGridCellData } from "@/types/habit";

const getOffsetArr = (items: number) => {
  return Array.from({ length: items }, () => null)
}

export const getDateString = (date: Date) => date.toISOString().split('T')[0];

export const getMonthGridData = (month: number, year: number, logs: HabitsLogRow[]) => {
  const daysArr = [];
  const total = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= total; i++) {
    const date = new Date(year, month, i);

    const isChecked = logs.find(log => getDateString(date) === log.date)

    daysArr.push({
      date,
      day: i,
      weekday: date.getDay(), // 0 = Sunday
      isChecked: !!isChecked
    });
  }

  // Get offsets
  const initialWeekDay = daysArr[0].weekday;
  const initialOffsetArr = getOffsetArr(initialWeekDay);

  const finalWeekDay = daysArr[daysArr.length - 1].weekday;
  const finalOffsetArr = finalWeekDay != 6 ? getOffsetArr(6 - finalWeekDay) : [];

  daysArr.unshift(...initialOffsetArr);
  daysArr.push(...finalOffsetArr)

  return daysArr as HabitGridCellData[];
}

export const updateHabitsStoreData = (habits: Habit[], newLog: HabitsLogRow): Habit[] => {
  // Get habit
  const newHabits = habits.map(habit => {
    if(habit.id === newLog.habit_id) {
      habit.logs.push(newLog);
    }
    return habit;
  })

  return newHabits;
}