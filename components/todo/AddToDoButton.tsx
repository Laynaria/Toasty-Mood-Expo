import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { useContext } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const pencilIcon = require("@/assets/todo-icons/pencil.png");

export function AddToDoButton() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: selectedTheme.primary,
          borderColor:
            colorScheme() === "light"
              ? "#FFFFFF"
              : selectedTheme.darkBackground,
        },
      ]}
    >
      <Image
        source={pencilIcon}
        style={[styles.image, { tintColor: selectedTheme.secondary }]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 8,
  },
  image: {
    height: 30,
    width: 30,
  },
});
