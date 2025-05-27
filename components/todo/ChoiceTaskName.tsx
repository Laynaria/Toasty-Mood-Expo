import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { useContext } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  taskName: string;
  changeTaskName: (text: string) => void;
};

export default function ChoiceTaskName({ taskName, changeTaskName }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <TextInput
      placeholder="What do you want to do?"
      placeholderTextColor={selectedTheme.secondary}
      style={[
        styles.taskNameInput,
        {
          color: selectedTheme.secondary,
          borderColor: selectedTheme.secondary,
        },
      ]}
      value={taskName}
      onChangeText={changeTaskName}
    />
  );
}

const styles = StyleSheet.create({
  taskNameInput: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "85%",
  },
});
