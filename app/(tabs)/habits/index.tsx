import { ScrollView, StyleSheet } from "react-native";


import HabitsGrid from "@/components/ui/HabitsGrid";

const Habits = () => {
  return (
    <ScrollView style={styles.container}>

      <HabitsGrid />

    </ScrollView>
  );
}

export default Habits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
