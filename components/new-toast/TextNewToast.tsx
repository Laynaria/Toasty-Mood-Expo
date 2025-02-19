import { useContext } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

type Props = {
  text: string;
  style: TextStyle;
};

export default function TextNewToast({ text, style }: Props) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  if (text === "I'm Done!" || text === "Yes" || text === "No") {
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
        {text}
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
