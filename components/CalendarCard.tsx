import { Image, Pressable, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import toastsMoods from "../services/toasts";

const toastEmpty = require("../assets/icons/toast-empty.png");

export default function CalendarCard({ day, checkDate, date }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/new-toast/${date}`)}
    >
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
      <Text style={styles.text}>{day}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toast: {
    width: 38,
    height: 38,
    margin: 4,
  },
  text: {
    color: "#E3A062",
  },
});
