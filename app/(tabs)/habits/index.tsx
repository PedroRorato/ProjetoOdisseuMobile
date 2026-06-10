import { ScrollView, StyleSheet } from "react-native";


import HabitsGrid from "@/components/habits/HabitsGrid";
import HabitsGridSkeleton from "@/components/habits/HabitsGrid/HabitsGridSkeleton";
import Button from "@/components/ui/Button";
import { useHabitStore } from "@/store/useHabitStore";
import { useEffect, useState } from "react";

type SelectedMonth = {
  month: number,
  year: number,
}

const Habits = () => {
  const habits = useHabitStore(s => s.habits);

  const [selectedMonth, setSelectedMonth] = useState<SelectedMonth | null>(null);

  useEffect(()=>{
    const today = new Date();
    setSelectedMonth({month: today.getMonth(), year: today.getFullYear()})
  }, []);

  return (
    <ScrollView style={styles.container}>
      {!selectedMonth ? <HabitsGridSkeleton/> : (
        <>
          <Button title={`${selectedMonth.month.toString()}`} onPress={()=>{}}/>
          {habits.map(habit => <HabitsGrid key={habit.id} habit={habit} />)}
        </>
      )}
    </ScrollView>
  );
}

export default Habits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
