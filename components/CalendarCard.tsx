import { Image, StyleSheet } from "react-native";
import toastsMoods from "../services/toasts";
import { months } from "../services/time";

const toastEmpty = require("../assets/icons/toast-empty.png");

export default function CalendarCard({
  toasts,
  day,
  selectedYear,
  selectedMonth,
}) {
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

  return (
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
    />
  );
}

const styles = StyleSheet.create({
  toast: {
    width: 38,
    height: 38,
    margin: 4,
  },
});
