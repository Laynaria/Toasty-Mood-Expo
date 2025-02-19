import { useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { handlePreviousPageNavigation } from "../../services/layoutService";

const backIcon: ImageSourcePropType = require("../../assets/icons/back.png");

export default function BackArrow() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  const { previousPage, index, previousOffset } = useGlobalSearchParams();

  return (
    <Pressable
      onPress={() =>
        handlePreviousPageNavigation(previousPage, previousOffset, index)
      }
      style={styles.backButton}
    >
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
