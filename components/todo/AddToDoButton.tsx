import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { Dispatch, useContext } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const pencilIcon = require("@/assets/todo-icons/pencil.png");

type Props = {
  setIsPressed: Dispatch<boolean>;
};

export function AddToDoButton({ setIsPressed }: Props) {
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
      onPress={() => setIsPressed(true)}
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
