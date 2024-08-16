import { Image, StyleSheet, Text, View } from "react-native";

export default function TimelineCard({ toast, img }) {
  const date = new Date(toast.date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daySuffix = ["st", "nd", "rd"];

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${months[date.getMonth()].slice(
        0,
        3
      )}. ${date.getDate()}${
        date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
      }`}</Text>
      <View style={styles.content}>
        <Image source={img} />
        <Text>{toast.note}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  date: {
    paddingHorizontal: 16,
    marginBottom: 8,
    color: "#6A3C11",
  },
  content: {
    backgroundColor: "#E3A062",
    paddingVertical: 32,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
});
