import { postHabitLog } from "@/api/habits.log.api";
import Checkbox from "@/components/ui/Checkbox";
import Typography from "@/components/ui/Typography";
import { Habit } from "@/types/habit";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type HabitCardProps = {
  data: Habit;
};

const HabitCard = ({ data }: HabitCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = async () => {
    const today = new Date().toISOString().split('T')[0];

    const payload = {
      habit_id: data.id as number,
      user_id: 1,
      date: today,
    }

    setIsChecked((prev) => !prev);
    if(!isChecked) {
      postHabitLog(payload)

      /*
      if (error) {
        console.log("Error:", error);
        setIsChecked((prev) => !prev);
      }
      */
    }
  };

  return (
    <Pressable onPress={handleClick}>
      <View style={styles.container}>
        <Checkbox isChecked={isChecked} />
        <Typography
          variant="titleSmall"
          style={isChecked ? styles.checkedText : {}}
        >
          {data.title}
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
