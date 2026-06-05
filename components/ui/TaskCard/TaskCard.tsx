import { Pressable, View, StyleSheet } from "react-native";
import Typography from "../Typography";
import Colors from "@/constants/Colors";
import { Task } from "@/types/task";
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

type TaskCardProps = {
  data: Task;
};

const TaskCard = ({ data }: TaskCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    console.log("handleClick");
    setIsChecked((prev) => !prev);
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
    backgroundColor: Colors.light.surface,
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
