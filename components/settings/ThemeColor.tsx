import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeType } from "../../types/theme.types";
import {
  handleThemeColorChange,
  themeColors,
} from "../../services/settingsService";

export default function ThemeColor() {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeColorContext);

  return (
    <View
      style={[styles.container, { backgroundColor: selectedTheme.primary }]}
    >
      <Text style={[styles.text, { color: selectedTheme.secondary }]}>
        Theme Colour
      </Text>

      {themeColors.map((theme: ThemeType) => (
        <Pressable
          key={theme.primary}
          onPress={() =>
            handleThemeColorChange(theme, selectedTheme, setSelectedTheme)
          }
          style={[
            styles.button,
            {
              backgroundColor: theme.primary,
              borderColor:
                theme.primary === selectedTheme.primary
                  ? theme.secondary
                  : theme.primary,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    rowGap: 24,
    width: "90%",
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 30,
    borderRadius: 16,
  },
  text: {
    fontWeight: "bold",
    width: "100%",
  },
  button: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "transparent",
    width: 55,
    height: 55,
  },
});
