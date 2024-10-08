import { View } from "react-native";
import { Slot, usePathname } from "expo-router";
import BackArrow from "./BackArrow";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import { StatusBar } from "expo-status-bar";

export default function LayoutView() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const path = usePathname();

  const bgColor = () => {
    if (colorScheme() !== "light") {
      if (path.startsWith("/new-toast")) {
        return selectedTheme.secondary;
      }

      return selectedTheme.darkBackground;
    }

    return "#FFFFFF";
  };

  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: bgColor(),
      }}
    >
      <BackArrow />
      <Slot />
      <StatusBar style="inverted" />
    </View>
  );
}
