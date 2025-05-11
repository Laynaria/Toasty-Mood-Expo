import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { subTaskType } from "@/types/todo.types";

const checkedImg = require("@/assets/icons/checked.png");
const uncheckedImg = require("@/assets/icons/unchecked.png");

type Props = {
  subTask: subTaskType;
  updateSubTaskStatus: () => void;
};

export default function SubTaskToDoCard({
  subTask,
  updateSubTaskStatus,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable onPress={() => updateSubTaskStatus()}>
      <View style={styles.subTaskContainer}>
        <Text style={{ color: selectedTheme.secondary }}>-</Text>
        <Image
          source={subTask.isDone ? checkedImg : uncheckedImg}
          style={[
            styles.checkbox,
            {
              tintColor: selectedTheme.secondary,
              height: 25,
              width: 25,
            },
          ]}
        />
        <Text style={{ color: selectedTheme.secondary }}>{subTask.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subcontainer: {
    borderRadius: 12,
    padding: 15,
    width: "85%",
    flexDirection: "column",
    gap: 6,
  },
  mainTaskContainer: {
    flexDirection: "row",
    columnGap: 6,
    alignItems: "center",
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 4,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  subTaskContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
});
