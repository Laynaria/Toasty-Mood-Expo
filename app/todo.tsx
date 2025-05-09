import { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import GradientBackground from "@/components/GradientBackground";
import ToDoCard from "@/components/todo/ToDoCard";
import { toDoTaskType } from "@/types/todo.types";
import { FlashList } from "@shopify/flash-list";

const bedIcon = require("@/assets/todo-icons/bed.png");
const sandwichIcon = require("@/assets/todo-icons/sandwich.png");
const alarmIcon = require("@/assets/todo-icons/alarm.png");

export default function ToDo() {
  const [fakeDatas, setFakeDatas] = useState<toDoTaskType[]>([
    {
      id: 0,
      taskName: "Sleep",
      date: "Apr. 25 23:01",
      icon: bedIcon,
      isDone: true,
      subTasks: [],
    },
    {
      id: 1,
      taskName: "Wake Up",
      date: "Apr. 26 8:20",
      icon: alarmIcon,
      isDone: false,
      subTasks: [],
    },
    {
      id: 2,
      taskName: "Mealtime",
      date: "Apr. 26 8:20",
      icon: sandwichIcon,
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

  const renderItem = useCallback(
    ({ item, index }: { item: toDoTaskType; index: number }) => (
      <ToDoCard
        task={item}
        key={index}
        fakeDatas={fakeDatas}
        setFakeDatas={setFakeDatas}
      />
    ),
    [fakeDatas]
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.scroll}>
        <GradientBackground />
        <View style={styles.subContainer}>
          <FlashList<toDoTaskType>
            showsVerticalScrollIndicator={false}
            data={fakeDatas}
            renderItem={renderItem}
            estimatedItemSize={50}
          />
        </View>
      </SafeAreaView>
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
    marginTop: 100,
  },
});
