import { Image, StyleSheet, Text, View } from "react-native";
import { months, daySuffix } from "../services/time";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

export default function TimelineCard({ toast, img }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const date = new Date(toast.date);

  const photoSource = toast.photo ? { uri: toast.photo } : null;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.date,
          {
            color:
              colorScheme() === "light"
                ? selectedTheme.secondary
                : selectedTheme.primary,
          },
        ]}
      >{`${months[date.getMonth()].slice(0, 3)}. ${date.getDate()}${
        date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
      }`}</Text>
      <View
        style={[styles.content, { backgroundColor: selectedTheme.primary }]}
      >
        <View
          style={[
            styles.dot,
            {
              backgroundColor: selectedTheme.primary,
              borderColor:
                colorScheme() === "light"
                  ? "white"
                  : selectedTheme.darkBackground,
            },
          ]}
        />
        <Image source={img} />
        <Text style={{ color: selectedTheme.secondary }}>{toast.note}</Text>
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
  },
  content: {
    justifyContent: "center",
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
  },
  photo: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
});
