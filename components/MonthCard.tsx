import { Dispatch, useContext } from "react";
import { Image, StyleSheet, Text, Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import { handleMonthSelect } from "../services/monthCardService";

const backIcon = require("../assets/icons/month-arrow.png");

type Props = {
  selectedMonth: string;
  selectedYear: string | number;
  timeline: boolean;
  setIsSelectingMonth: Dispatch<boolean> | null;
};

export default function MonthCard({
  selectedMonth,
  selectedYear,
  timeline = false,
  setIsSelectingMonth = null,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={[
        styles.container,
        {
          marginTop: timeline ? 20 : 0,
          alignItems: timeline ? "center" : "center",
          width: timeline ? "65.5%" : "100%",
          alignSelf: timeline ? "flex-start" : "center",
        },
      ]}
      onPress={() => handleMonthSelect(timeline, setIsSelectingMonth)}
    >
      <Svg
        width="156"
        height="48"
        viewBox="0 0 104 32"
        fill="none"
        style={styles.image}
      >
        <Path
          d="M0 8.20513C0 3.67356 5.89397 0 13.1646 0H90.8354C98.106 0 104 3.67356 104 8.20513V23.7949C104 28.3264 98.106 32 90.8354 32H13.1646C5.89397 32 0 28.3264 0 23.7949V8.20513Z"
          fill={selectedTheme.primary}
        />
        <Path d="M0 0H13.1646V8.20513H0V0Z" fill={selectedTheme.primary} />
      </Svg>

      <Text
        style={[
          styles.text,
          {
            color: selectedTheme.secondary,
            paddingHorizontal: !timeline ? 16 : 0,
          },
        ]}
      >
        {selectedMonth} {selectedYear}
      </Text>
      {timeline ? (
        <Image
          source={backIcon}
          style={[
            styles.backIcon,
            {
              tintColor: selectedTheme.secondary,
            },
          ]}
        />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  image: {
    position: "absolute",
  },
  text: {
    padding: 16,
    fontWeight: "bold",
  },
  backIcon: {
    height: 16,
    width: 16,
  },
});
