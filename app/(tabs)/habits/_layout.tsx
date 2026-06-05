import AntDesign from '@expo/vector-icons/AntDesign';
import { Stack, useRouter } from "expo-router";

export default function HabitsLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Hábitos",
          headerTitleAlign: 'center',
          headerRight: () => <AntDesign name="plus" size={24} color="black" onPress={() => router.push("/habits/add")} />
          }}
      />
      <Stack.Screen name="add" options={{ title: "Adicionar novo hábito" }} />
    </Stack>
  );
}
