export type HabitStore = {
  habits: any[],
  logs: any[],
  loading: boolean,
  initializeHabitsData: () => Promise<void>
}