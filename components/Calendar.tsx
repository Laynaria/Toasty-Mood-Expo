import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getToasts } from "../services/storage";
import { days, daysName, months, calendarFlexgrow } from "../services/time";
import toastsMoods from "../services/toasts";

const toastEmpty = require("../assets/icons/toast-empty.png");

export default function Calendar() {
  const [toasts, setToasts] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("September");
  const [selectedYear, setSelectedYear] = useState("2024");

  const checkDate = (day) => {
    if (toasts) {
      return toasts.filter(
        (toast) =>
          new Date(toast.date).toLocaleDateString() ===
          new Date(
            `${selectedYear}-${months.indexOf(selectedMonth)}-${day}T03:22:00`
          ).toLocaleDateString()
      )[0];
    }
  };

  const daysInMonth = new Date(
    parseInt(selectedYear),
    months.indexOf(selectedMonth) + 1,
    0
  ).getDate();

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());
    };

    loadToasts();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {daysName.map((day) => (
          <Text style={styles.daysName} key={day}>
            {day}
          </Text>
        ))}

        {days
          .filter((day) => day <= daysInMonth)
          .map((day) => (
            <Image
              source={
                !!checkDate(day)
                  ? toastsMoods[checkDate(day).moodArray][
                      checkDate(day).selectedToast - 1
                    ].img
                  : toastEmpty
              }
              style={[
                styles.toast,
                {
                  tintColor:
                    day > parseInt(new Date().toLocaleDateString())
                      ? "rgba(0, 0, 0, 0.1)"
                      : "auto",
                },
              ]}
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
    height: "100%",
    paddingTop: 48,
    // paddingLeft: 24,
  },
  daysName: {
    color: "#E3A062",
    width: 46,
    textAlign: "center",
  },
  toast: {
    width: 38,
    height: 38,
    margin: 4,
  },
});
