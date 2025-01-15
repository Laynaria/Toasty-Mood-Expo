import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import TextNewToast from "./TextNewToast";

export default function ChoiceButton({
  text,
  optionState,
  setOptionState,
  value,
}) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const handlePress = () => {
    setOptionState(value);
  };

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor:
            value === optionState
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
