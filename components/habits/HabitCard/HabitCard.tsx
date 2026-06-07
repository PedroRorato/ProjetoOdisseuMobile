import { postHabitLog } from "@/api/habits.log.api";
import Checkbox from "@/components/ui/Checkbox";
import Typography from "@/components/ui/Typography";
import { isCheckedHabitCard } from "@/helpers/habits";
import { Habit } from "@/types/habit";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type HabitCardProps = {
  habit: Habit;
  date: string;
};

const HabitCard = ({ habit, date }: HabitCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = async () => {
    const today = new Date().toISOString().split('T')[0];

    const payload = {
      habit_id: habit.id,
      user_id: 1,
      date: today,
    }

    setIsChecked((prev) => !prev);
    if(!isChecked) {
      postHabitLog(payload)
    }
  };

  useEffect(()=>{
    setIsChecked(isCheckedHabitCard(habit, date))
  }, [habit]);

  return (
    <Pressable onPress={handleClick}>
      <View style={styles.container}>
        <Checkbox isChecked={isChecked} />
        <Typography
          variant="titleSmall"
          style={isChecked ? styles.checkedText : {}}
        >
          {habit.title}
        </Typography>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    textAlign: "center",
  },
  checkedText: {
    textDecorationLine: "line-through",
    color: "line-through",
  },
});

export default HabitCard;
