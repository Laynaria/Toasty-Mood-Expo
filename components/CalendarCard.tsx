import { Image, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import toastsMoods from "../services/toasts";

const toastEmpty = require("../assets/icons/toast-empty.png");

export default function CalendarCard({ day, checkDate }) {
  return (
    <Pressable onPress={() => router.push(`/new-toast/${checkDate().date}`)}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toast: {
    width: 38,
    height: 38,
    margin: 4,
  },
});
