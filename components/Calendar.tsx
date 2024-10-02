import { StyleSheet, Text, View } from "react-native";

import { days, daysName, months, calendarFlexgrow } from "../services/time";
import CalendarCard from "./CalendarCard";
import MonthCard from "./MonthCard";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

export default function Calendar({
  selectedMonth,
  selectedYear,
  toasts,
  style,
}) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const daysInMonth = new Date(
    parseInt(selectedYear),
    months.indexOf(selectedMonth) + 1,
    0
  ).getDate();

  const checkDate = (day) => {
    if (toasts) {
      return toasts.filter(
        (toast) =>
          new Date(toast.date).toLocaleDateString() ===
          new Date(
            `${selectedYear}-${
              months.indexOf(selectedMonth) + 1
            }-${day}T03:22:00`
          ).toLocaleDateString()
      )[0];
    }
  };

  return (
    <View>
      <View style={[styles.container, style]}>
        <MonthCard selectedMonth={selectedMonth} selectedYear={selectedYear} />

        {daysName.map((day) => (
          <Text
            style={[styles.daysName, { color: selectedTheme.primary }]}
            key={day}
          >
            {day}
          </Text>
        ))}

        {days
          .filter((day) => day <= daysInMonth)
          .map((day) => (
            <CalendarCard
              day={day}
              checkDate={() => checkDate(day)}
              date={
                new Date(
                  `${selectedYear}-${
                    months.indexOf(selectedMonth) + 1
                  }-${day}T03:22:00`
                )
              }
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
    width: 46,
    textAlign: "center",
  },
});
