import { useContext } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot, usePathname } from "expo-router";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import BackArrow from "./BackArrow";

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
