import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoDate } from "@/types/todo.types";

type Props = {
  changeDate: (selectedDate: toDoDate) => void;
  openChangeDateModal: () => void;
};

export default function ChoiceDateModal({
  changeDate,
  openChangeDateModal,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const onChangeDate = () => {
    const selectDate = new Date().toString();

    changeDate(selectDate);
    openChangeDateModal();
  };

  return (
    <Pressable style={styles.container} onPress={openChangeDateModal}>
      <Text style={{ color: selectedTheme.secondary }}>
        Date picker modal back to create a new calendar etc
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 20,
    backgroundColor: "rgba(0 ,0 ,0 , 0.2)",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
