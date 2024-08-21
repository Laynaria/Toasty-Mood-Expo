import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getToasts } from "../services/storage";
import { days, daysName, months, calendarFlexgrow } from "../services/time";
import CalendarCard from "./CalendarCard";
import MonthCard from "./MonthCard";

export default function Calendar({ selectedMonth, selectedYear }) {
  const [isLoading, setIsLoading] = useState(true);

  const [toasts, setToasts] = useState(null);

  const daysInMonth = new Date(
    parseInt(selectedYear),
    months.indexOf(selectedMonth) + 1,
    0
  ).getDate();

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());

      setIsLoading(false);
    };

    loadToasts();
  }, []);

  if (isLoading) {
    return <View />;
  }

  return (
    <View>
      <View style={styles.container}>
        <MonthCard selectedMonth={selectedMonth} selectedYear={selectedYear} />

        {daysName.map((day) => (
          <Text style={styles.daysName} key={day}>
            {day}
          </Text>
        ))}

        {days
          .filter((day) => day <= daysInMonth)
          .map((day) => (
            <CalendarCard
              toasts={toasts}
              day={day}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              key={day}
            />
          ))}

        {daysInMonth !== 28 ? (
          <View
            style={{
              width:
                calendarFlexgrow(daysInMonth) * 38 +
                calendarFlexgrow(daysInMonth) * 11,
            }}
          />
        ) : (
          ""
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: 3,
    rowGap: 24,
    paddingTop: 48,
  },
  daysName: {
    color: "#E3A062",
    width: 46,
    textAlign: "center",
  },
});
