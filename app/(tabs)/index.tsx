import { FlatList, StyleSheet } from "react-native";

import { View } from "@/components/Themed";

import TaskCard from "@/components/ui/TaskCard/TaskCard";
import Colors from "@/constants/Colors";
import { supabase } from "@/supabase-client";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const { error, data } = await supabase.from("habits").select("*");

    if (error) {
      console.log("Error", error);
    } else {
      console.log("Data", data);
      setHabits(data);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  console.log("API test");

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard data={item} />}
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
