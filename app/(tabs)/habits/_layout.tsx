import { Stack } from "expo-router";

export default function HabitsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Hábitos", headerTitleAlign: 'center',  }} />
      <Stack.Screen name="add" options={{ title: "Adicionar novo hábito" }} />
    </Stack>
  );
}
