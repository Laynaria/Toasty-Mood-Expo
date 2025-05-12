import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoTaskType } from "@/types/todo.types";
import { Image } from "expo-image";
import { Dispatch, useContext, useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

const bedIcon = require("@/assets/todo-icons/bed.png");
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
    icon: bedIcon,
    isDone: false,
    subTasks: [],
  });

  const updateToDoList = () => {
    if (currentToDo.taskName !== "") {
      setFakeDatas([...fakeDatas, currentToDo]);
      setIsPressed(false);
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => setIsPressed(false)}>
      <Pressable
        style={[
          styles.subContainer,
          { backgroundColor: selectedTheme.primary },
        ]}
      >
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
          value={currentToDo.taskName}
          onChangeText={(text: string) =>
            setCurrentToDo({ ...currentToDo, taskName: text })
          }
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
    justifyContent: "space-around",
    alignItems: "center",
    gap: 12,
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
  },
  registerIcon: {
    height: 40,
    width: 40,
  },
});
