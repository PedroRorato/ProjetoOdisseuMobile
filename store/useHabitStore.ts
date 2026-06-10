import { fetchHabits } from '@/api/habits.api';
import { fetchHabitsLog } from '@/api/habits.log.api';
import { HabitsLogRow } from '@/api/types';
import { updateHabitsStoreData } from '@/helpers/dates';
import { groupHabitsLogData } from '@/helpers/habits';
import { create } from 'zustand';
import { HabitStore } from './types';


export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  loading: true,
  initializeHabitsData: async () => {
    set({ loading: true })

    const today = new Date();

    try {
      const [habitsRes, logsRes] = await Promise.all([
        fetchHabits(),
        fetchHabitsLog(today.getMonth(), today.getFullYear()),
      ]);

      // Group logs for each habit
      const habitsWithLogs = groupHabitsLogData(habitsRes, logsRes)

      set({
        habits: habitsWithLogs,
        loading: false,
      })

    } catch (err) {
      console.error(err)
      set({ loading: false })
    }
  },
  updateHabits: (newLog: HabitsLogRow) => {
    set((state) => ({
      habits: [...updateHabitsStoreData(state.habits, newLog)],
    }))
  }
}))