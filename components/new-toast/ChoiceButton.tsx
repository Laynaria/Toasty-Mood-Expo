import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import TextNewToast from "./TextNewToast";

export default function ChoiceButton({ text, isJamDay, setIsJamDay, value }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const handlePress = () => {
    setIsJamDay(value);
  };

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor:
            value === isJamDay
              ? selectedTheme.primary
              : `${selectedTheme.primary}80`,
        },
      ]}
      onPress={handlePress}
    >
      <TextNewToast text={text} style={{}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
});
