import { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
      date: "Apr. 25 23:01",
      isDone: true,
      subTasks: [],
    },
    {
      id: 1,
      taskName: "Wake Up",
      date: "Apr. 26 8:20",
      category: 2,
      isDone: false,
      subTasks: [],
    },
    {
      id: 2,
      taskName: "Mealtime",
      date: "Apr. 26 8:20",
      category: 0,
      isDone: false,
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
      />
    ),
    [fakeDatas]
  );

  const sortedData = (): toDoTaskType[] =>
    fakeDatas
      .sort((a, b) => (a.date > b.date ? 1 : -1))
      .sort((a, b) => (a.isDone > b.isDone ? 1 : -1));

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
