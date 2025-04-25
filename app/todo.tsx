import GradientBackground from "@/components/GradientBackground";
import ToDoCard from "@/components/todo/ToDoCard";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const bedIcon = require("@/assets/todo-icons/bed.png");
const sandwichIcon = require("@/assets/todo-icons/sandwich.png");
const alarmIcon = require("@/assets/todo-icons/alarm.png");

export default function ToDo() {
  const [fakeDatas, setFakeDatas] = useState([
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
          name: "Cook",
          isDone: true,
        },
        {
          name: "Prepare Table",
          isDone: false,
        },
        {
          name: "Sit Down",
          isDone: false,
        },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <GradientBackground />
      <View style={styles.subContainer}>
        {fakeDatas.map((task) => (
          <ToDoCard
            task={task}
            key={task.id}
            fakeDatas={fakeDatas}
            setFakeDatas={setFakeDatas}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    marginTop: 100,
    gap: 20,
    alignItems: "center",
    width: "100%",
  },
});
