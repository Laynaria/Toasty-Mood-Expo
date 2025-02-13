import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import { themeNamesArray } from "../services/themeServices";
import ToastThemeChoice from "../components/theme-page/ToastThemeChoice";
import GradientNewToast from "../components/new-toast/GradientNewToast";
import toastsMoods from "../services/toasts";

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
            fontSize: 18,
            fontWeight: "500",
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
            <ToastThemeChoice
              array={toastThemeArray}
              name={themeNamesArray[index]}
              index={index}
              key={index}
            />
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
    paddingTop: 50,
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
