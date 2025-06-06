import { useContext } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { dateText } from "@/services/toDoServices";
import { toDoDate } from "@/types/todo.types";

type Props = {
  date: toDoDate;
  openChangeDateModal: () => void;
};

export default function ChoiceDate({ date, openChangeDateModal }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={[styles.container, { borderColor: selectedTheme.secondary }]}
      onPress={openChangeDateModal}
    >
      <Text style={{ color: selectedTheme.secondary }}>
        {date ? dateText(date) : "Pick a Date"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
