import { StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { months, daySuffix } from "../../services/time";

export default function DateNewToast({ date }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  return (
    <Text
      style={[
        styles.text,
        {
          marginBottom: 100,
          color:
            colorScheme() === "light"
              ? selectedTheme.secondary
              : selectedTheme.primary,
        },
      ]}
    >{`${months[date.getMonth()]} ${date.getDate()}${
      date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
    } ${date.getFullYear()}`}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
