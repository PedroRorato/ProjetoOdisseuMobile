import { supabase } from "@/supabase-client";
import { Task } from "@/types/task";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Checkbox from "../Checkbox/Checkbox";
import Typography from "../Typography";

type TaskCardProps = {
  data: Task;
};

const TaskCard = ({ data }: TaskCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = async () => {
    const today = new Date().toISOString().split('T')[0];
    console.log("handleClick", today);
    const payload = {
      habit_id: data.id,
      user_id: 1,
      date: today,
    }

    setIsChecked((prev) => !prev);
    if(!isChecked) {
      const { error } = await supabase.from("habits_log").insert(payload).single();

      if (error) {
        console.log("Error:", error);
        setIsChecked((prev) => !prev);
      }
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

export default TaskCard;
