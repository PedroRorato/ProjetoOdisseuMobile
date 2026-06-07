import Typography from "@/components/ui/Typography";
import { getMonthGridData } from "@/helpers/dates";
import { useHabitStore } from "@/store/useHabitStore";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HabitsGridHeader from "./HabitsGridHeader";

const HabitsGrid = () => {
  //TODO: Check Zustand format
  const initializeHabitsData = useHabitStore(state => state.initializeHabitsData)

  const [days, setDays] = useState<any[]>([]);

  const getMonthDays = () => {
    const daysArr = getMonthGridData(3, 2026)

    setDays(daysArr);
    console.log("daysArr", daysArr);
  }

  useEffect(() => {
    getMonthDays();
    initializeHabitsData();
  }, [initializeHabitsData]);

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>Acordar</Typography>

      <HabitsGridHeader/>

      <View style={styles.monthContainer}>
        {days.map(day => {
          let squareStyle = styles.square;
          if(day) squareStyle = {...squareStyle, ...styles.filledSquare}
          return (
            <View style={squareStyle}>
              <Typography variant='bodySmall' style={styles.squareText}>{day ? day.day : ''}</Typography>
            </View>
          )
        })}
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
  square: {
    height: 24,
    width: '13%',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  filledSquare: {
    backgroundColor: '#2da44e',
  },
  emptySquare: {
    backgroundColor: '#eff2f5',
  },
  squareText: {
    color: 'white',
    textAlign: 'center',
  },
});