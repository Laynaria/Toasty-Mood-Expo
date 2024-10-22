import { router, useGlobalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

const backIcon = require("../assets/icons/back.png");

export default function BackArrow() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  const { previousPage, pageY, index } = useGlobalSearchParams();

  const handlePress = () => {
    previousPage
      ? router.navigate(previousPage as string)
      : router.navigate({ pathname: "/", params: { pageY, index } });
  };

  return (
    <Pressable onPress={handlePress} style={styles.backButton}>
      <Image
        source={backIcon}
        style={[
          styles.img,
          {
            tintColor:
              colorScheme() === "light"
                ? selectedTheme.secondary
                : selectedTheme.primary,
          },
        ]}
      />
    </Pressable>
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
