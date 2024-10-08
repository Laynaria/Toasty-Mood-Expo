import { View } from "react-native";
import { Slot } from "expo-router";
import BackArrow from "./BackArrow";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

export default function LayoutView() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        backgroundColor:
          colorScheme() === "light" ? "#FFFFFF" : selectedTheme.darkBackground,
      }}
    >
      <BackArrow />
      <Slot />
    </View>
  );
}
