import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function SelectCard({ item, handleFunction }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={styles.container}
      key={item}
      onPress={() => handleFunction(item)}
    >
      <Text
        style={[
          styles.texts,
          {
            color: selectedTheme.secondary,
          },
        ]}
      >
        {item}
      </Text>
    </Pressable>
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
