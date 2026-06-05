import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, StyleSheet } from "react-native";

type CheckboxProps = {
  isChecked: boolean;
};

const Checkbox = ({ isChecked }: CheckboxProps) => {
  return (
    <View style={styles.container}>
      {!isChecked && <FontAwesome name="square-o" size={24} color="black" />}
      {isChecked && (
        <FontAwesome
          name="check-square-o"
          size={24}
          color={Colors.light.primary}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 23,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    borderColor: "#2563EB",
  },
  inner: {
    width: 12,
    height: 12,
    backgroundColor: "#2563EB",
    borderRadius: 2,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Checkbox;
