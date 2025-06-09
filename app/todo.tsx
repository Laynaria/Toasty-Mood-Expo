import { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import GradientBackground from "@/components/GradientBackground";
import ToDoCard from "@/components/todo/ToDoCard";
import { toDoTaskType } from "@/types/todo.types";
import { FlashList } from "@shopify/flash-list";
import AddOrEditToDo from "@/components/todo/AddOrEditToDo";
import AddOrEditTodoModal from "@/components/todo/AddOrEditToDoModal";
import toDoCategory from "@/services/toDoCategory";
import ToDoTitle from "@/components/todo/ToDoTitle";
import { isAllTaskDone } from "@/services/toDoServices";

export default function ToDo() {
  const [fakeDatas, setFakeDatas] = useState<toDoTaskType[]>([
    {
      id: 0,
      taskName: "Sleep",
      category: 1,
      date: "2025-04-25T23:00:00",
      isDone: true,
      finished_at: "2025-04-25T23:30:00",
      subTasks: [],
    },
    {
      id: 1,
      taskName: "Wake Up",
      date: "2025-04-26T08:20:00",
      category: 2,
      isDone: false,
      finished_at: null,
      subTasks: [],
    },
    {
      id: 2,
      taskName: "Mealtime",
      date: "2025-04-26T12:15:00",
      category: 0,
      isDone: false,
      finished_at: null,
      subTasks: [
        {
          index: 0,
          name: "Cook",
          isDone: true,
        },
        {
          index: 1,
          name: "Prepare Table",
          isDone: false,
        },
        {
          index: 2,
          name: "Sit Down",
          isDone: false,
        },
      ],
    },
  ]);

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const renderItem = useCallback(
    ({ item }: { item: toDoTaskType }) => (
      <ToDoCard
        task={item}
        key={item.id}
        fakeDatas={fakeDatas}
        setFakeDatas={setFakeDatas}
        icon={toDoCategory[item.category]?.icon}
        accessibilityHelper={toDoCategory[item.category]?.name}
      />
    ),
    [fakeDatas]
  );

  const sortedData = (): toDoTaskType[] => {
    const toDoWithDate = fakeDatas
      .filter((task) => task.date !== null && !task.isDone)
      .sort((a, b) => (a.date && b.date ? (a.date > b.date ? 1 : -1) : -2));

    const toDoWithoutDate = fakeDatas
      .filter((task) => task.date === null && !task.isDone)
      .sort((a, b) => a.id - b.id);

    const doneTasks = fakeDatas
      .filter((task) => task.isDone)
      .sort((a, b) =>
        a.finished_at && b.finished_at
          ? a.finished_at < b.finished_at
            ? 1
            : -1
          : -2
      );

    return [...toDoWithDate, ...toDoWithoutDate, ...doneTasks];
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.scroll}>
        <GradientBackground />
        <View style={styles.subContainer}>
          <FlashList<toDoTaskType>
            showsVerticalScrollIndicator={false}
            data={sortedData()}
            renderItem={renderItem}
            estimatedItemSize={50}
            contentContainerStyle={{ paddingTop: 100 }}
            ListHeaderComponent={() => {
              if (fakeDatas.length === 0) {
                return;
              }

              if (isAllTaskDone(fakeDatas)) {
                return <ToDoTitle text="Done" />;
              }

              return <ToDoTitle text="To Do" />;
            }}
            ItemSeparatorComponent={(item) => {
              if (
                !item.trailingItem.date &&
                item.leadingItem.date &&
                !item.trailingItem.isDone
              ) {
                return <ToDoTitle text="No Date" />;
              }

              if (item.trailingItem.isDone && !item.leadingItem.isDone) {
                return <ToDoTitle text="Done" />;
              }
            }}
          />
        </View>
      </SafeAreaView>
      <AddOrEditToDo setIsPressed={setIsPressed} />
      {isPressed ? (
        <AddOrEditTodoModal
          setIsPressed={setIsPressed}
          fakeDatas={fakeDatas}
          setFakeDatas={setFakeDatas}
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
});
