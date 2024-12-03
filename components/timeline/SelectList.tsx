import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function SelectList({ array }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View style={styles.container}>
      {array.map((element) => (
        <Pressable key={element}>
          <Text
            style={[
              styles.texts,
              {
                color: selectedTheme.secondary,
              },
            ]}
          >
            {element}
          </Text>
        </Pressable>
      ))}
    </View>
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
