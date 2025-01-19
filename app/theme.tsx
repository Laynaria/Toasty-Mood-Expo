import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import ToastThemeChoice from "../components/theme-page/ToastThemeChoice";
import GradientNewToast from "../components/new-toast/GradientNewToast";

import toastsMoods from "../services/toasts";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

export default function Theme() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              colorScheme() === "light" ? "#FFFFFF" : selectedTheme.secondary,
          },
        ]}
      >
        <GradientNewToast />
        <Text
          style={{
            color:
              colorScheme() === "light"
                ? selectedTheme.secondary
                : selectedTheme.primary,
          }}
        >
          Select your theme
        </Text>

        <View style={styles.arrayContainer}>
          {toastsMoods.map((toastThemeArray, index) => (
            <ToastThemeChoice array={toastThemeArray} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("screen").height - 48,
    alignItems: "center",
    paddingTop: 55,
    paddingBottom: 40,
    gap: 24,
  },
  arrayContainer: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    gap: 24,
  },
});
