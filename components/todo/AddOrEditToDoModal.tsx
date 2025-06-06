import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoDate, toDoTaskType } from "@/types/todo.types";
import { Dispatch, useContext, useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ChoiceTaskName from "./ChoiceTaskName";
import AddOrEditValidateButton from "./AddOrEditValideButton";
import ChoiceCategory from "./ChoiceCategory";
import toDoCategory from "@/services/toDoCategory";
import ChoiceDate from "./ChoiceDate";
import ChoiceDateModal from "./ChoiceDateModal";

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
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);

  const [currentToDo, setCurrentToDo] = useState<toDoTaskType>({
    id: fakeDatas.length,
    taskName: "",
    // date: new Date(),
    date: null,
    category: 0,
    isDone: false,
    subTasks: [],
  });
  const [newSubTask, setNewSubTask] = useState<string>("");
  const [modalHeight, setModalHeight] = useState(0);
  const [modalScrollY, setModalScrollY] = useState(0);

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

  const changeCateogry = (category: number): void => {
    setCurrentToDo({ ...currentToDo, category });
    setIsCategoryModalOpen(false);
  };

  const changeDate = (selectedDate: toDoDate): void => {
    setCurrentToDo({ ...currentToDo, date: selectedDate });
  };

  const changeDateModalStatus = (): void => {
    setIsDateModalOpen(!isDateModalOpen);
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
          onScroll={(e) => {
            setModalScrollY(e.nativeEvent.contentOffset.y);
          }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setModalHeight(height);
          }}
        >
          <View style={styles.subTaskContainer}>
            <ChoiceTaskName
              placeholder="What do you want to do?"
              taskName={currentToDo.taskName}
              changeTaskName={changeTaskName}
            />

            <AddOrEditValidateButton handleValidate={updateToDoList} />

            <ChoiceCategory
              category={currentToDo.category}
              openCategoryModal={() => setIsCategoryModalOpen(true)}
            />

            <ChoiceDate
              date={currentToDo.date}
              openChangeDateModal={changeDateModalStatus}
            />

            {currentToDo.subTasks.map((subTask) => (
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

      {isCategoryModalOpen ? (
        <Pressable
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 20,
            backgroundColor: "rgba(0 ,0 ,0 , 0.2)",
          }}
          onPress={() => setIsCategoryModalOpen(false)}
        >
          <View
            style={[
              styles.modal,
              {
                backgroundColor: selectedTheme.primary,
                borderColor: selectedTheme.secondary,
                bottom:
                  currentToDo.subTasks.length > 7
                    ? modalHeight + modalScrollY - 282
                    : modalHeight - 21,
              },
            ]}
          >
            {toDoCategory.map((currentCategory) => (
              <Pressable
                key={currentCategory.id}
                style={[styles.button]}
                onPress={() => changeCateogry(currentCategory.id)}
              >
                <Image source={currentCategory.icon} style={styles.icon} />
                <Text
                  style={{
                    color: selectedTheme.secondary,
                  }}
                >
                  {currentCategory.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      ) : null}

      {isDateModalOpen ? (
        <ChoiceDateModal
          changeDate={changeDate}
          openChangeDateModal={changeDateModalStatus}
        />
      ) : null}
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
  modal: {
    position: "absolute",
    zIndex: 100,
    flexDirection: "row",
    // justifyContent: "space-around",
    flexWrap: "wrap",
    width: "75.1%",
    gap: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    left: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: 130,
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 4,
  },
});
