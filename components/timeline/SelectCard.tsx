import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function SelectCard({ item, currentScrollItem }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View style={styles.container} key={item}>
      <Text
        style={[
          styles.texts,
          {
            color: selectedTheme.secondary,
            opacity: item === currentScrollItem ? 1 : 0.5,
          },
        ]}
      >
        {item}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  texts: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
