import { useCallback, useEffect, useState } from "react";
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
import { getNextDays } from "@/services/time";

export default function ToDo() {
  const [fakeDatas, setFakeDatas] = useState<toDoTaskType[]>([
    {
      id: 0,
      taskName: "Sleep",
      category: 1,
      date: "2025-04-25T23:00:00",
      isDone: true,
      created_at: "2025-03-25T23:30:00",
      finished_at: "2025-04-25T23:30:00",
      renewableDate: getNextDays(new Date("2025-08-19T23:30:00")),
      renewableDelay: 1,
      subTasks: [],
    },
    {
      id: 1,
      taskName: "Wake Up",
      date: "2025-04-26T08:20:00",
      category: 2,
      isDone: false,
      created_at: "2025-03-25T23:30:00",
      finished_at: null,
      renewableDate: null,
      renewableDelay: null,
      subTasks: [],
    },
    {
      id: 2,
      taskName: "Mealtime",
      date: "2025-04-26T12:15:00",
      category: 0,
      isDone: false,
      created_at: "2025-03-25T23:30:00",
      finished_at: null,
      renewableDate: null,
      renewableDelay: null,
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

  useEffect(() => {
    const checkRenewableDatas = () => {
      const renewableCheck: toDoTaskType[] = fakeDatas.filter(
        (day) =>
          day.renewableDate &&
          new Date(new Date(day.renewableDate).setHours(0, 0, 0)) <= new Date()
      );

      const editedRenewable: toDoTaskType[] = renewableCheck.map(
        (todo: toDoTaskType, index) => {
          return {
            ...todo,
            id: index + fakeDatas.length,
            isDone: false,
            renewableDate: getNextDays(
              new Date(todo.renewableDate as string),
              todo.renewableDelay as number
            ).toString(),
          };
        }
      );

      // il faut maintenant arriver à éditer le tableau original pour remplacer
      // le renewable pour ceux qui ont le meme id.
      // puis on push au tableau editedRenewable

      // renewableCheck.forEach((day) => (day.renewableDate = null));

      // console.log(renewableCheck);

      setFakeDatas([...fakeDatas, ...editedRenewable]);
    };

    checkRenewableDatas();
  }, []);

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
