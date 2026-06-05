export const groupHabitsLogData = (habits: any[], logs: any[]) => {
  const habitsWithLogs = habits.map((habit) => {
    const log = logs.filter(item => item.habit_id === habit.id);
    return {...habit, log}
  });

  return habitsWithLogs;
}