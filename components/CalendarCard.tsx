import { Image, StyleSheet } from "react-native";
import toastsMoods from "../services/toasts";

const toastEmpty = require("../assets/icons/toast-empty.png");

export default function CalendarCard({ day, checkDate }) {
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
              ? "#E6E6E6"
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
