import { Pressable, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import toastsMoods from "../services/toasts";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import { Image } from "expo-image";

const toastEmpty = require("../assets/icons/toast-empty.png");
const biteyOption = require("../assets/icons/bitey-calendar.png");

export default function CalendarCard({
  day,
  checkDate,
  date,
  index,
  currentOffset,
}) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  const handlePress = () => {
    if (date.getTime() <= new Date().getTime()) {
      router.push({
        pathname: `/new-toast/${date}`,
        params: { index, previousOffset: currentOffset },
      });
    }
  };

  const imgSource = () => {
    if (!checkDate(day)) {
      return toastEmpty;
    }

    if (checkDate(day).isJamDay) {
      return toastsMoods[checkDate(day).moodArray][
        checkDate(day).selectedToast - 1
      ].jamImg;
    }

    return toastsMoods[checkDate(day).moodArray][
      checkDate(day).selectedToast - 1
    ].img;
  };

  const biteySource = () => {
    if (!checkDate(day)) {
      return false;
    }

    return checkDate(day).isBitey;
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image
        source={imgSource()}
        style={[
          styles.toast,
          {
            tintColor: !checkDate(day) ? selectedTheme.primary : "auto",
            opacity: date.getTime() >= new Date().getTime() ? 0.5 : 1,
          },
        ]}
        recyclingKey={date}
      />

      {biteySource() ? (
        <Image
          source={biteyOption}
          style={[
            styles.bitey,
            {
              tintColor:
                colorScheme() === "light"
                  ? "#FFFFFF"
                  : selectedTheme.darkBackground,
            },
          ]}
        />
      ) : null}

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
  bitey: {
    position: "absolute",
    width: 21,
    height: 19,
    zIndex: 1,
    top: -1,
    right: -1,
  },
});
