import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function ToastThemeChoice({ array, name }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);

  return (
    <View style={styles.container}>
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
