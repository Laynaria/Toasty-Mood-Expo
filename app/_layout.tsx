import { Slot } from "expo-router";
import { ThemeColorContextProvider } from "../contexts/ThemeColorContext";
import BackArrow from "../components/BackArrow";

export default function RootLayout() {
  return (
    <ThemeColorContextProvider>
      <BackArrow />
      <Slot />
    </ThemeColorContextProvider>
  );
}
