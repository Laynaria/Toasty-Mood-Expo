import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { Image } from "expo-image";
import SubTaskToDoCard from "./SubTaskToDoCard";

const checkedImg = require("@/assets/icons/checked.png");
const uncheckedImg = require("@/assets/icons/unchecked.png");

export default function ToDoCard({ task }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const [isChecked, setIsChecked] = useState(task.isDone);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsChecked(!isChecked)}>
        <Image
          source={isChecked ? checkedImg : uncheckedImg}
          style={[
            styles.checkbox,
            {
              marginTop: 20,
              tintColor:
                colorScheme() === "light"
                  ? selectedTheme.secondary
                  : selectedTheme.primary,
            },
          ]}
        />
      </Pressable>

      <View
        style={[
          styles.subcontainer,
          { backgroundColor: selectedTheme.primary },
        ]}
      >
        <View style={styles.mainTaskContainer}>
          <Image source={task.icon} style={styles.icon} />

          <View style={styles.textContainer}>
            <Text
              style={{
                color: selectedTheme.secondary,
                paddingHorizontal: 5,
                fontWeight: "bold",
              }}
            >
              {task.taskName}
            </Text>

            <Text
              style={{
                color: selectedTheme.primary,
                backgroundColor: selectedTheme.secondary,
                borderRadius: 12,
                textAlign: "center",
                paddingVertical: 1,
                paddingHorizontal: 5,
                fontSize: 12,
              }}
            >
              {task.date ? task.date : null}
            </Text>
          </View>
        </View>

        {task.subTasks.map((subTask, index) => (
          <SubTaskToDoCard key={index} subTask={subTask} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subcontainer: {
    borderRadius: 12,
    padding: 15,
    width: "85%",
    flexDirection: "column",
    gap: 6,
  },
  mainTaskContainer: {
    flexDirection: "row",
    columnGap: 6,
    alignItems: "center",
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 4,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  subTaskContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
});
