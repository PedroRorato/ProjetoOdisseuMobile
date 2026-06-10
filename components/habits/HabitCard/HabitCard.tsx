import { postHabitLog } from "@/api/habits.log.api";
import Checkbox from "@/components/ui/Checkbox";
import { isCheckedHabitCard } from "@/helpers/habits";
import { useHabitStore } from "@/store/useHabitStore";
import { Habit } from "@/types/habit";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import HabitCardTitle from "./HabitCardTitle";

type HabitCardProps = {
  habit: Habit;
  date: string;
};

const HabitCard = ({ habit, date }: HabitCardProps) => {
  const updateHabits = useHabitStore(s => s.updateHabits);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = async () => {
    const payload = {
      habit_id: habit.id,
      user_id: 1,
      date,
    }

    setIsChecked((prev) => !prev);
    if(!isChecked) {
      postHabitLog(payload).then((response)=> updateHabits(response));
    }
  };

  useEffect(()=>{
    setIsChecked(isCheckedHabitCard(habit, date))
  }, [habit]);

  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Checkbox isChecked={isChecked} />
      <HabitCardTitle title={habit.title as string} isChecked={isChecked} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    textAlign: "center",
  },
});

export default HabitCard;
