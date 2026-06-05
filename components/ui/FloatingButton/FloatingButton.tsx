import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  onPress: () => void;
};

const FloatingButton = ({ onPress }: ButtonProps) => {
  const handleOnPress = () => {
    console.log("Pressed!");
    onPress();
  };

  return (
    <TouchableOpacity style={styles.fab} onPress={handleOnPress}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: Colors.light.primary,
    borderRadius: 30,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    fontSize: 24,
    color: "white",
  },
});

export default FloatingButton;
