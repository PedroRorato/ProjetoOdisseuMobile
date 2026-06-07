import Typography from "@/components/ui/Typography";
import { StyleSheet, View } from "react-native";

const WEEK_DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

const HabitsGridHeader = () => {
  return (
    <View style={styles.container}>
      {WEEK_DAYS.map(day => (
        <View style={styles.dayContainer}>
          <Typography variant='bodySmall' style={styles.text}>{day}</Typography>
        </View>
      ))}
    </View>
  )
};

export default HabitsGridHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  dayContainer: {
    width: '13%',
    height: 'auto'
  },
  text: {
    textAlign:'center',
    color: "#888",
  }
});