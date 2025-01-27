import { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import { storeThemeOverride } from "../../services/storage";

export default function ThemeOverride() {
  const { selectedTheme } = useContext(ThemeColorContext);
  const { selectOverride, setSelectOverride } = useContext(ThemeToastContext);

  const themeOverride: boolean[] = [true, false];

  const handlePress = (option: boolean) => {
    if (option !== selectOverride) {
      setSelectOverride(option);
      storeThemeOverride(option);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: selectedTheme.primary }]}
    >
      <Text style={[styles.text, { color: selectedTheme.secondary }]}>
        Override old toasts theme from calendar and timeline with current theme?
      </Text>

      {themeOverride.map((option: boolean, index: number) => (
        <Pressable
          key={index}
          onPress={() => handlePress(option)}
          style={[
            styles.button,
            {
              backgroundColor:
                option === selectOverride
                  ? selectedTheme.secondary
                  : selectedTheme.primary,
              borderColor: selectedTheme.secondary,
            },
          ]}
        >
          <Text
            style={{
              color:
                option === selectOverride
                  ? selectedTheme.primary
                  : selectedTheme.secondary,
              textTransform: "capitalize",
            }}
          >
            {option === true ? "Yes" : "No"}
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
    zIndex: 1,
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
