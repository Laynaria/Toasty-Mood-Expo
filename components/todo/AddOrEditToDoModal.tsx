import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoTaskType } from "@/types/todo.types";
import { Image } from "expo-image";
import { Dispatch, useContext, useState } from "react";
import { Keyboard, Pressable, StyleSheet, TextInput } from "react-native";
import ChoiceTaskName from "./ChoiceTaskName";

const pencilIcon = require("@/assets/todo-icons/pencil2.png");

type Props = {
  setIsPressed: Dispatch<boolean>;
  fakeDatas: toDoTaskType[];
  setFakeDatas: Dispatch<toDoTaskType[]>;
};

export default function AddOrEditTodoModal({
  setIsPressed,
  fakeDatas,
  setFakeDatas,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  // May be used in ToDoCard instead later
  const dateArray = new Date().toUTCString().split(", ")[1].split(" ");
  const dotOrNot = dateArray[1].length > 3 ? "." : "";
  const date = `${dateArray[1].slice(0, 3)}${dotOrNot} ${
    dateArray[0]
  } ${dateArray[3].slice(0, 5)}`;
  // End of what could be used in ToDoCard instead later

  const [currentToDo, setCurrentToDo] = useState<toDoTaskType>({
    id: fakeDatas.length,
    taskName: "",
    date,
    category: 0,
    isDone: false,
    subTasks: [
      {
        index: 0,
        name: "Cook",
        isDone: false,
      },
      {
        index: 1,
        name: "Prepare Table",
        isDone: false,
      },
    ],
  });

  const updateToDoList = () => {
    if (currentToDo.taskName !== "") {
      setFakeDatas([...fakeDatas, currentToDo]);
      setIsPressed(false);
    }
  };

  const changeTaskName = (text: string): void => {
    setCurrentToDo({ ...currentToDo, taskName: text });
  };

  const changeSubTaskName = (text: string, index: number) => {
    const updatedSubTask = { ...currentToDo.subTasks[index], name: text };
    const updatedSubTasks = currentToDo.subTasks.map((currentSubTask) =>
      currentSubTask.index === index ? updatedSubTask : currentSubTask
    );

    setCurrentToDo({ ...currentToDo, subTasks: updatedSubTasks });
  };

  const closeToDoModal = () => {
    Keyboard.isVisible() ? Keyboard.dismiss() : setIsPressed(false);
  };

  return (
    <Pressable style={styles.container} onPress={closeToDoModal}>
      <Pressable
        style={[
          styles.subContainer,
          { backgroundColor: selectedTheme.primary },
        ]}
        onPress={Keyboard.dismiss}
      >
        <ChoiceTaskName
          taskName={currentToDo.taskName}
          changeTaskName={changeTaskName}
        />

        <Pressable
          style={[
            styles.registerButton,
            {
              borderColor: selectedTheme.secondary,
            },
          ]}
          onPress={() => updateToDoList()}
        >
          <Image
            source={pencilIcon}
            style={[
              styles.registerIcon,
              { tintColor: selectedTheme.secondary },
            ]}
          />
        </Pressable>

        {currentToDo.subTasks.map((subTask) => (
          // change map into flashlist later if not everything
          <TextInput
            placeholder="Add a sub-task."
            placeholderTextColor={selectedTheme.secondary}
            style={[
              styles.taskNameInput,
              {
                color: selectedTheme.secondary,
                borderColor: selectedTheme.secondary,
              },
            ]}
            value={currentToDo.subTasks[subTask.index].name}
            onChangeText={(text) => changeSubTaskName(text, subTask.index)}
            key={subTask.index}
          />
        ))}
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subContainer: {
    maxHeight: "75%",
    width: "100%",
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 12,
  },
  taskNameInput: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "85%",
  },
  registerButton: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  registerIcon: {
    height: 30,
    width: 30,
  },
});
