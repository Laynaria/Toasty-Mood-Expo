import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";

export default function ToastThemeChoice({ array, name, index }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const { selectedThemeToast, setSelectedThemeToast } =
    useContext(ThemeToastContext);

  const borderColor = () => {
    if (selectedThemeToast === index && colorScheme() === "light") {
      return selectedTheme.secondary;
    }

    if (selectedThemeToast === index && colorScheme() !== "light") {
      return selectedTheme.primary;
    }

    return "transparent";
  };

  return (
    <View style={[styles.container, { borderColor: borderColor() }]}>
      <Text
        style={{
          color:
            colorScheme() === "light"
              ? selectedTheme.secondary
              : selectedTheme.primary,
        }}
      >
        {name}
      </Text>
      <View
        style={[
          styles.subcontainer,
          {
            backgroundColor: selectedTheme.primary,
          },
        ]}
      >
        <View style={styles.card}>
          {array.map((icon) => (
            <Image source={icon.img} key={icon.id} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 4,
    borderWidth: 1,
    padding: 8,
    borderRadius: 16,
  },
  subcontainer: {
    padding: 16,
    borderRadius: 16,
  },
  card: {
    flexDirection: "row",
    gap: 8,
  },
});
