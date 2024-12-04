import { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function SelectList({ array, handleFunction }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <FlatList
      style={styles.container}
      data={array}
      renderItem={({ item }) => (
        <Pressable key={item} onPress={() => handleFunction(item)}>
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
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: "50%",
  },
  texts: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
