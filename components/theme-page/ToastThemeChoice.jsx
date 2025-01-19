import { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function ToastThemeChoice({ array }) {
  const { selectedTheme } = useContext(ThemeColorContext);
  return (
    <View
      style={[
        styles.container,
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  card: {
    flexDirection: "row",
    gap: 8,
  },
});
