import { Pressable, StyleSheet, Text } from "react-native";

export default function SelectValidationButton({
  text,
  buttonFunction,
  style,
}: {
  text: string;
  buttonFunction: () => void;
  style: { backgroundColor: string; color: string; borderColor: string };
}) {
  return (
    <Pressable
      style={[styles.buttons, style, { borderWidth: 1 }]}
      onPress={buttonFunction}
    >
      <Text
        style={[
          styles.texts,
          {
            color: style.color,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexBasis: "45%",
    borderRadius: 8,
    padding: 8,
  },
  texts: {
    fontWeight: "bold",
    textAlign: "center",
  },
});