import Colors from "@/constants/Colors";
import { Control, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import Typography from "../Typography";

type InputProps = {
  control: Control;
  label?: string;
  name: string;
  placeholder?: string;
};

const FormInput = ({ control, label, name, placeholder }: InputProps) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          {label && <Typography>{label}</Typography>}

          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        </View>
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.divider,
    marginTop: 10,
    padding: 16,
  },
});

export default FormInput;
