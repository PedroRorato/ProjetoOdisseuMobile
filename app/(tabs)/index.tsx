import { FlatList, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import Typography from "@/components/ui/Typography";

import TaskCard from "@/components/ui/TaskCard/TaskCard";
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
      <Typography
        variant="title"
        style={{ paddingBlock: 14, textAlign: "center" }}
      >
        Diário
      </Typography>

      <FlatList
        style={{ flex: 1, width: "100%" }}
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
    paddingHorizontal: 16,
  },
});
