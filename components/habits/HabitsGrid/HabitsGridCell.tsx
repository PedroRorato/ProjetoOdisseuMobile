import Typography from "@/components/ui/Typography";
import { HabitGridCellData } from "@/types/habit";
import { StyleSheet, View } from "react-native";

type HabitsGridCellProps = {
  cellData: HabitGridCellData;
}

const HabitsGridCell = ({cellData}: HabitsGridCellProps) => {
  if (!cellData) return <View style={styles.square}/>

  return (
    <View
      style={[
        styles.square,
        cellData.isChecked ? styles.checkedSquare : styles.unCheckedSquare,
      ]}
    >
      <Typography variant="bodySmall" style={styles.squareText}>
        {cellData.day}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    height: 24,
    width: '13%',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  checkedSquare: {
    backgroundColor: '#2da44e',
  },
  unCheckedSquare: {
    backgroundColor: '#eff2f5',
  },
  squareText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HabitsGridCell;