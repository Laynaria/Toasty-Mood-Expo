import { StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function TextNewToast({ text, style }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  if (text === "I'm Done!") {
    return (
      <Text
        style={[
          styles.text,
          {
            color:
              colorScheme() === "light"
                ? "white"
                : selectedTheme.darkBackground,
          },
        ]}
      >
        I'm Done!
      </Text>
    );
  }

  return (
    <Text
      style={[
        styles.text,
        style,
        {
          color:
            colorScheme() === "light"
              ? selectedTheme.secondary
              : selectedTheme.primary,
        },
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
