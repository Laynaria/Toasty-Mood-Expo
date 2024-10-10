import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { StyleSheet } from "react-native";

export default function GradientNewToast() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  return (
    <LinearGradient
      colors={[
        colorScheme() === "light"
          ? selectedTheme.primary
          : selectedTheme.darkBackground,
        colorScheme() === "light" ? "#FFFFFF" : selectedTheme.secondary,
      ]}
      style={styles.gradient}
    />
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    width: "100%",
    height: "50%",
    top: 0,
  },
});
