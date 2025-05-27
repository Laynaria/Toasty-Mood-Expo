import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoTaskType } from "@/types/todo.types";
import { Dispatch, useContext, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ChoiceTaskName from "./ChoiceTaskName";
import AddOrEditValidateButton from "./AddOrEditValideButton";
import ChoiceCategory from "./ChoiceCategory";

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
    subTasks: [],
  });
  const [newSubTask, setNewSubTask] = useState<string>("");

  const updateToDoList = () => {
    if (currentToDo.taskName !== "") {
      const newToDo: toDoTaskType = {
        ...currentToDo,
        subTasks: currentToDo.subTasks.filter((subTask) => subTask.name !== ""),
      };

      setFakeDatas([...fakeDatas, newToDo]);
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

  const addNewSubTask = () => {
    const updatedSubTasks = currentToDo.subTasks;

    updatedSubTasks.push({
      index: currentToDo.subTasks.length,
      name: newSubTask,
      isDone: false,
    });

    setCurrentToDo({ ...currentToDo, subTasks: updatedSubTasks });
    setNewSubTask("");
  };

  const removeEmptySubTask = (index: number) => {
    if (currentToDo.subTasks[index].name === "") {
      const updatedSubTasks = currentToDo.subTasks
        .filter((subTask) => subTask.index !== index)
        .map((subTask, index) => ({ ...subTask, index }));

      setCurrentToDo({ ...currentToDo, subTasks: updatedSubTasks });
    }
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 8,
          }}
        >
          <View style={styles.subTaskContainer}>
            <ChoiceTaskName
              placeholder="What do you want to do?"
              taskName={currentToDo.taskName}
              changeTaskName={changeTaskName}
            />

            <AddOrEditValidateButton handleValidate={updateToDoList} />

            <ChoiceCategory />

            {currentToDo.subTasks.map((subTask) => (
              // change map into flashlist later if not everything

              <ChoiceTaskName
                placeholder="What sub-task do you want to add?"
                taskName={currentToDo.subTasks[subTask.index].name}
                changeTaskName={(text) =>
                  changeSubTaskName(text, subTask.index)
                }
                isSubTask={true}
                key={subTask.index}
                onSubmitEditing={() => removeEmptySubTask(subTask.index)}
              />
            ))}

            {currentToDo.subTasks.length < 15 ? (
              <ChoiceTaskName
                placeholder="Add a sub-task."
                taskName={newSubTask}
                changeTaskName={setNewSubTask}
                isSubTask={true}
                onSubmitEditing={addNewSubTask}
              />
            ) : null}
          </View>
        </ScrollView>
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
  subTaskContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 12,
  },
});
