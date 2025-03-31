import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { useContext } from "react";
import {
  AnimatableStringValue,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

const backPicture = require("@/assets/icons/back.png");

type Props = {
  scrollBack: () => void;
  rotate: AnimatableStringValue;
};

export default function ScrollBackButton({ scrollBack, rotate }: Props) {
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
      onPress={scrollBack}
    >
      <Image
        source={backPicture}
        style={[
          styles.image,
          {
            transform: [{ rotate }],
            tintColor: selectedTheme.secondary,
          },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    bottom: 100,
    zIndex: 100,
    padding: 12,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
  },
  image: {
    height: 20,
    width: 20,
  },
});
