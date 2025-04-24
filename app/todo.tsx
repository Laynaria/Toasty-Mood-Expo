import GradientBackground from "@/components/GradientBackground";
import ToDoCard from "@/components/todo/ToDoCard";
import { StyleSheet, View } from "react-native";

export default function ToDo() {
  const fakeDatas = [
    {
      id: 0,
      taskName: "Sleep",
      date: "Apr. 25 23:01",
      subTasks: [],
    },
    {
      id: 1,
      taskName: "Wake Up",
      date: "Apr. 26 8:20",
      subTasks: [],
    },
    {
      id: 2,
      taskName: "Mealtime",
      date: "Apr. 26 8:20",
      subTasks: [
        {
          name: "Cook",
          isDone: false,
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
  ];

  return (
    <View style={styles.container}>
      <GradientBackground />
      <View style={styles.subContainer}>
        {fakeDatas.map((task) => (
          <ToDoCard task={task} key={task.id} />
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
