import { ScrollView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import FloatingButton from "@/components/ui/FloatingButton/FloatingButton";
import HabitsGrid from "@/components/ui/HabitsGrid";
import { supabase } from "@/supabase-client";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const Habits = () => {
  const router = useRouter();

  const fetchHabitsLog = async () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split("T")[0];
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split("T")[0];

    const { error, data } = await supabase.from("habits_log").select("*").gte("date", firstDay).lt("date", lastDay);

    if (error) {
      console.log("Error", error);
    } else {
      console.log("Data", data);
      //setHabits(data);
    }
  };

  useEffect(() => {
    fetchHabitsLog();
  }, []);

  return (
    <ScrollView style={styles.container}>

      <View>

      </View>

      <HabitsGrid />

      <FloatingButton onPress={() => router.push("/habits/add")} />
    </ScrollView>
  );
}

export default Habits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },


});
