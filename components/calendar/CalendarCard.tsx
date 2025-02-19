import { useContext } from "react";
import { ImageSourcePropType, Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { handleCalendarToastRedirect } from "../../services/calendarServices";

const biteyOption: ImageSourcePropType = require("../../assets/icons/bitey-calendar.png");

type Props = {
  day: any;
  date: Date;
  index: number;
  currentOffset: number;
  imgSource: ImageSourcePropType;
  biteySource: ImageSourcePropType | false;
};

export default function CalendarCard({
  day,
  date,
  index,
  currentOffset,
  imgSource,
  biteySource,
}: Props) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

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
      />

      {biteySource ? (
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
