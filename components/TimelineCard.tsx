import { Image, StyleSheet, Text, View } from "react-native";

export default function TimelineCard({ toast, img }) {
  const date = new Date(toast.date);

  const photoSource = toast.photo ? { uri: toast.photo } : null;

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
        <View style={styles.dot} />
        <Image source={img} />
        <Text>{toast.note}</Text>
        {photoSource ? <Image source={photoSource} style={styles.photo} /> : ""}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    zIndex: 1,
  },
  date: {
    paddingHorizontal: 16,
    marginBottom: 8,
    color: "#6A3C11",
  },
  content: {
    justifyContent: "center",
    backgroundColor: "#E3A062",
    paddingVertical: 32,
    paddingHorizontal: 32,
    borderRadius: 16,
    gap: 8,
  },
  dot: {
    position: "absolute",
    zIndex: 1,
    width: 30,
    height: 30,
    borderRadius: 60,
    borderWidth: 3,
    left: -20,
    backgroundColor: "#E3A062",
    borderColor: "white",
  },
  photo: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
});
