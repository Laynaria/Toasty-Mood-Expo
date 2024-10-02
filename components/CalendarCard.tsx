import { Pressable, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import toastsMoods from "../services/toasts";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import { Image } from "expo-image";

const toastEmpty = require("../assets/icons/toast-empty.png");

export default function CalendarCard({ day, checkDate, date }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const handlePress = () => {
    if (date.getTime() <= new Date().getTime()) {
      router.push(`/new-toast/${date}`);
    }
  };

  const tintColor = () => {
    if (date.getTime() >= new Date().getTime()) {
      return "#E6E6E6";
    }

    if (!checkDate(day)) {
      return selectedTheme.primary;
    }

    return "auto";
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
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
            tintColor: tintColor(),
          },
        ]}
        recyclingKey={date}
      />

      <Text style={{ color: selectedTheme.primary }}>{day}</Text>
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
});
