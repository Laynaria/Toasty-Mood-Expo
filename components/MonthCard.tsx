import { StyleSheet, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function MonthCard({
  selectedMonth,
  selectedYear,
  timeline = false,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: timeline ? 20 : 0,
          alignItems: timeline ? "flex-start" : "center",
          width: timeline ? "72%" : "100%",
        },
      ]}
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
          fill="#E3A062"
        />
        <Path d="M0 0H13.1646V8.20513H0V0Z" fill="#E3A062" />
      </Svg>

      <Text style={styles.text}>
        {selectedMonth} {selectedYear}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 12,
  },
  image: {
    position: "absolute",
  },
  text: {
    padding: 16,
    color: "#6A3C11",
    fontWeight: "bold",
  },
});
