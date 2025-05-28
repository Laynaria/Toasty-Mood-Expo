import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";

type Props = {
  text: "To Do" | "Done";
};

export default function ToDoTitle({ text }: Props) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  return (
    <Text
      style={[
        styles.title,
        {
          color:
            colorScheme() === "light"
              ? selectedTheme.secondary
              : selectedTheme.primary,
        },
      ]}
    >
      {text} :
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    width: "90%",
    marginHorizontal: "auto",
    fontWeight: "bold",
    marginBottom: 24,
  },
});
