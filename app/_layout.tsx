import { router, Slot } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import { ThemeColorContextProvider } from "../contexts/ThemeColorContext";

const backIcon = require("../assets/icons/back.png");

export default function RootLayout() {
  return (
    <ThemeColorContextProvider>
      <Pressable onPress={router.back} style={styles.backButton}>
        <Image source={backIcon} style={styles.img} />
      </Pressable>
      <Slot />
    </ThemeColorContextProvider>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 17,
    padding: 15,
    zIndex: 1,
    borderRadius: 15,
  },
  img: {
    height: 20,
    width: 15,
  },
});
