import { Dispatch, useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import TextNewToast from "./TextNewToast";

type Props = {
  text: string;
  optionState: boolean;
  setOptionState: Dispatch<boolean>;
  value: boolean;
};

export default function ChoiceButton({
  text,
  optionState,
  setOptionState,
  value,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

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
      onPress={() => setOptionState(value)}
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
