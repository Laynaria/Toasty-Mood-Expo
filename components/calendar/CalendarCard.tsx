import { useContext } from "react";
import { ImageSourcePropType, Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { handleCalendarToastRedirect } from "../../services/calendarServices";
import { daySuffix, months } from "@/services/time";
import { CalendarDayType } from "@/types/time.types";
import { moodAccessibility } from "@/services/accessibility";

type Props = {
  day: CalendarDayType;
  date: Date;
  index: number;
  currentOffset: number;
  imgSource: ImageSourcePropType;
};

export default function CalendarCard({
  day,
  date,
  index,
  currentOffset,
  imgSource,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={styles.container}
      onPress={() => handleCalendarToastRedirect(date, index, currentOffset)}
    >
      <Image
        source={imgSource}
        style={[
          styles.toast,
          {
            tintColor: !day.toast ? selectedTheme.primary : "auto",
            opacity: date.getTime() >= new Date().getTime() ? 0.5 : 1,
          },
        ]}
        recyclingKey={date.toString()}
        accessibilityLabel={`${months[date.getMonth()]} ${date.getDate()}${
          date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
        } ${date.getFullYear()} ${
          day.toast
            ? moodAccessibility[day.toast.selectedToast]
            : "no mood selected"
        } mood icon`}
      />

      <Text style={{ color: selectedTheme.primary }}>{day.day}</Text>
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
