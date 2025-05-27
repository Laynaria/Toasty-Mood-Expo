import { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";

type Props = {
  placeholder: string;
  taskName: string;
  changeTaskName: (text: string) => void;
  isSubTask?: boolean;
};

export default function ChoiceTaskName({
  placeholder,
  taskName,
  changeTaskName,
  isSubTask,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View
      style={[
        isSubTask ? styles.container : "",
        { width: isSubTask ? "100%" : "85%" },
      ]}
    >
      {isSubTask ? (
        <Text style={{ color: selectedTheme.secondary }}>-</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={selectedTheme.secondary}
        style={[
          isSubTask ? styles.subTaskNameInput : styles.taskNameInput,
          {
            color: selectedTheme.secondary,
            borderColor: selectedTheme.secondary,
          },
        ]}
        value={taskName}
        onChangeText={changeTaskName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  taskNameInput: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  subTaskNameInput: {
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    width: "96.5%",
  },
});
