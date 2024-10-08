import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemePreference } from "../../types/theme.types";
import { storeThemePreference } from "../../services/storage";

export default function ThemeSetting() {
  const { selectedTheme, themePreference, setThemePreference, colorScheme } =
    useContext(ThemeColorContext);

  const themeSetting: ThemePreference[] = ["light", "dark", "system"];

  const handlePress = (theme: ThemePreference) => {
    if (theme !== themePreference) {
      setThemePreference(theme);
      storeThemePreference(theme);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: selectedTheme.primary }]}
    >
      <Text style={[styles.text, { color: selectedTheme.secondary }]}>
        Theme Setting
      </Text>

      {themeSetting.map((theme: ThemePreference) => (
        <Pressable
          key={theme}
          onPress={() => handlePress(theme)}
          style={[
            styles.button,
            {
              backgroundColor:
                theme === themePreference
                  ? selectedTheme.secondary
                  : selectedTheme.primary,
              borderColor: selectedTheme.secondary,
            },
          ]}
        >
          <Text
            style={{
              color:
                theme === themePreference
                  ? selectedTheme.primary
                  : selectedTheme.secondary,
              textTransform: "capitalize",
            }}
          >
            {theme}
          </Text>
        </Pressable>
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
    gap: 24,
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
    flex: 1,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 2,
  },
});
