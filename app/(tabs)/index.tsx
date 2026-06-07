import { FlatList, StyleSheet } from "react-native";

import { View } from "@/components/Themed";

import { fetchHabits } from "@/api/habits.api.js";
import { fetchHabitsLog } from "@/api/habits.log.api.js";

import HabitCard from "@/components/habits/HabitCard";
import Colors from "@/constants/Colors";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [habits, setHabits] = useState<any>([]);

  const fetchHabitsData = async () => {
    const data = await fetchHabits();
    setHabits(data);
    console.log('fetchHabitsData', data)
  };

  const fetchHabitsLogData = async () => {
    const today = new Date();
    const data = await fetchHabitsLog(today.getMonth(), today.getFullYear());
    console.log('fetchHabitsLogData', data)
  };

  useEffect(() => {
    fetchHabitsData();
    fetchHabitsLogData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HabitCard data={item} />}
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
