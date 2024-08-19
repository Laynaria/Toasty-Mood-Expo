import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getToasts } from "../services/storage";
import { days, daysName, months } from "../services/time";
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

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());
    };

    loadToasts();
  }, []);

  return (
    <View style={styles.container}>
      {daysName.map((day) => (
        <Text style={styles.daysName} key={day}>
          {day}
        </Text>
      ))}

      {days.map((day) => (
        <Image
          source={
            !!checkDate(day)
              ? toastsMoods[checkDate(day).moodArray][
                  checkDate(day).selectedToast - 1
                ].img
              : toastEmpty
          }
          style={styles.toast}
          key={day}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    columnGap: 3,
    rowGap: 24,
    height: "100%",
    paddingTop: 48,
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
