import Typography from "@/components/ui/Typography";
import { StyleSheet } from "react-native";


type HabitCardTitleProps = {
  title: string;
  isChecked: boolean;
}

const HabitCardTitle = ({title, isChecked}: HabitCardTitleProps) => {
  return (
    <Typography
      variant="titleSmall"
      style={isChecked ? styles.checkedText : undefined}
    >
      {title}
    </Typography>
  )
}

const styles = StyleSheet.create({
  checkedText: {
    textDecorationLine: "line-through",
    color: "line-through",
  },
});

export default HabitCardTitle;