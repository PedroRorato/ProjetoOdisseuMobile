import { postHabit } from "@/api/habitsApi";
import { View } from "@/components/Themed";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";

const AddHabit = () => {
  const router = useRouter();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await postHabit(data);

    router.push("/habits");
  };

  return (
    <View style={styles.container}>
      <FormInput control={control} label="Título" name="title" />

      <FormInput control={control} label="Descrição" name="description" />

      <Button title="Adicionar Hábito" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AddHabit;
