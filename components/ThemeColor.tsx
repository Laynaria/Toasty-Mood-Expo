import { useState, useContext, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

export default function ThemeColor() {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeColorContext);
  const themeColors: string[] = ["#E3A062", "#5673DB", "#EA4848"];
  //   const [selectedTheme, setSelectedTheme] = useState<string>(themeColors[0]);

  const handlePress = (theme: string) => {
    if (theme !== selectedTheme) {
      setSelectedTheme(themeColors[themeColors.indexOf(theme)]);
    }
  };

  useEffect(() => {
    console.log(selectedTheme);
  }, [selectedTheme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Theme Colour</Text>

      {themeColors.map((theme: string) => (
        <Pressable
          key={theme}
          onPress={() => handlePress(theme)}
          style={[
            styles.button,
            {
              backgroundColor: theme,
              borderColor: theme === selectedTheme ? "#FFFFFF" : "#6A3C11",
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
    backgroundColor: "#E3A062",
    width: "90%",
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 30,
    borderRadius: 16,
  },
  text: {
    fontWeight: "bold",
    color: "#6A3C11",
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
