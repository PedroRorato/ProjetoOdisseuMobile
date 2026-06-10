import Typography from "@/components/ui/Typography";
import { getMonthGridData } from "@/helpers/dates";
import { useHabitStore } from "@/store/useHabitStore";
import { Habit, HabitGridCellData } from "@/types/habit";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HabitsGridCell from "./HabitsGridCell";
import HabitsGridHeader from "./HabitsGridHeader";

type HabitsGridProps = {
  habit: Habit;
};

const HabitsGrid = ({ habit }: HabitsGridProps) => {
  const habits = useHabitStore(state => state.habits)

  const [cells, setCells] = useState<HabitGridCellData[]>([]);

  const getMonthDays = () => {
    const daysArr = getMonthGridData(5, 2026, habit.logs)

    setCells(daysArr);
    console.log("daysArr", daysArr);
  }

  useEffect(() => {
    getMonthDays();
  }, [habits]);

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>{habit.title}</Typography>

      <HabitsGridHeader/>

      <View style={styles.monthContainer}>
        {cells.map(cellData => <HabitsGridCell cellData={cellData} />)}
      </View>
    </View>
  )
};

export default HabitsGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:25,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 4,
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  monthContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 3,
  },
});