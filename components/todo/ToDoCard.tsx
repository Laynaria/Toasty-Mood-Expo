import { useContext } from "react";
import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import SubTaskToDoCard from "./SubTaskToDoCard";
import { subTaskType, toDoTaskType } from "@/types/todo.types";
import { dateText, isAllTaskDone } from "@/services/toDoServices";

const checkedImg = require("@/assets/icons/checked.png");
const uncheckedImg = require("@/assets/icons/unchecked.png");

type Props = {
  task: toDoTaskType;
  fakeDatas: toDoTaskType[];
  setFakeDatas: (newdatas: toDoTaskType[]) => void;
  icon: ImageSourcePropType;
  accessibilityHelper: string;
};

export default function ToDoCard({
  task,
  fakeDatas,
  setFakeDatas,
  icon,
  accessibilityHelper,
}: Props) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const taskIndex = fakeDatas.indexOf(task);

  const updateTaskStatus = (): void => {
    const updatedSubTasks = task.subTasks.map((currentSubTask) => ({
      ...currentSubTask,
      isDone: !task.isDone,
    }));

    const newDatas = fakeDatas.map((currentTask, index) =>
      taskIndex === index
        ? { ...task, isDone: !task.isDone, subTasks: updatedSubTasks }
        : currentTask
    );

    setFakeDatas(newDatas);
  };

  const updateSubTaskStatus = (subTask: subTaskType): void => {
    const updatedSubTask = { ...subTask, isDone: !subTask.isDone };
    const updatedSubTasks = task.subTasks.map((currentSubTask) =>
      currentSubTask.index === subTask.index ? updatedSubTask : currentSubTask
    );

    const newDatas = fakeDatas.map((currentTask, index) =>
      taskIndex === index
        ? {
            ...task,
            subTasks: updatedSubTasks,
            isDone: isAllTaskDone(updatedSubTasks),
          }
        : currentTask
    );

    setFakeDatas(newDatas);
  };

  return (
    <View style={[styles.container, { opacity: task.isDone ? 0.7 : 1 }]}>
      <Pressable onPress={() => updateTaskStatus()}>
        <Image
          source={task.isDone ? checkedImg : uncheckedImg}
          style={[
            styles.checkbox,
            {
              marginTop: 20,
              tintColor:
                colorScheme() === "light"
                  ? selectedTheme.secondary
                  : selectedTheme.primary,
            },
          ]}
        />
      </Pressable>

      <View
        style={[
          styles.subcontainer,
          {
            backgroundColor: selectedTheme.primary,
          },
        ]}
      >
        <View style={styles.mainTaskContainer}>
          <Image
            source={icon}
            style={styles.icon}
            accessibilityLabel={accessibilityHelper}
          />

          <View style={styles.textContainer}>
            <Text
              style={{
                color: selectedTheme.secondary,
                paddingHorizontal: 5,
                fontWeight: "bold",
              }}
            >
              {task.taskName}
            </Text>

            <Text
              style={{
                color: selectedTheme.primary,
                backgroundColor: selectedTheme.secondary,
                borderRadius: 12,
                textAlign: "center",
                paddingVertical: 1,
                paddingHorizontal: 5,
                fontSize: 12,
              }}
            >
              {task.date ? dateText(new Date(task.date)) : null}
            </Text>
          </View>
        </View>

        {task.subTasks.map((subTask, index) => (
          <SubTaskToDoCard
            key={index}
            subTask={subTask}
            updateSubTaskStatus={() => updateSubTaskStatus(subTask)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    marginBottom: 20,
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
