import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import Calendar from "../../components/Calendar";

import { months, years } from "../../services/time";

export default function Index() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {years().map((year) =>
          months
            .filter(
              (month) =>
                months.indexOf(month) <= new Date().getMonth() ||
                year !== new Date().getFullYear()
            )
            .map((month) => (
              <Calendar
                selectedMonth={month}
                selectedYear={year}
                key={`${month} ${year}`}
              />
            ))
        )}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginBottom: 250,
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
