import { Slot } from "expo-router";
import { ThemeColorContextProvider } from "../contexts/ThemeColorContext";
import BackArrow from "../components/BackArrow";

import { useColorScheme, View } from "react-native";

export default function RootLayout() {
  let colorScheme = useColorScheme();

  return (
    <ThemeColorContextProvider>
      <View
        style={{
          display: "flex",
          height: "100%",
          backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#220304",
        }}
      >
        <BackArrow />
        <Slot />
      </View>
    </ThemeColorContextProvider>
  );
}
