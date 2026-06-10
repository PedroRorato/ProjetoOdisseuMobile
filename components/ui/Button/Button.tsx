import Colors from "@/constants/Colors";
import { StyleSheet, TouchableOpacity } from "react-native";
import Typography from "../Typography";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Typography style={styles.text}>{title}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    backgroundColor: Colors.light.primary,
    padding: 16,
    borderRadius: 4,
  },
  text: {
    color: Colors.light.textOnPrimary,
    textAlign: "center",
  },
});

export default Button;
