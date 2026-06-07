import { FlatList, StyleSheet } from "react-native";

import { View } from "@/components/Themed";


import HabitCard from "@/components/habits/HabitCard";
import Colors from "@/constants/Colors";
import { useHabitStore } from "@/store/useHabitStore";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const habits = useHabitStore(s => s.habits);
  const loading = useHabitStore(s => s.loading);
  const initializeHabitsData = useHabitStore(s => s.initializeHabitsData);

  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);

    initializeHabitsData();
  }, [initializeHabitsData]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={habits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HabitCard habit={item} date={currentDate} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.surface
  }
});

