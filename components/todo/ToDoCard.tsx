import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { Image } from "expo-image";

const checkedImg = require("@/assets/icons/checked.png");
const uncheckedImg = require("@/assets/icons/unchecked.png");

const randomIcon = require("@/assets/icons/jam.png");

export default function ToDoCard({ task }) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsChecked(!isChecked)}>
        <Image
          source={isChecked ? checkedImg : uncheckedImg}
          style={[
            styles.checkbox,
            {
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
          <Image source={randomIcon} style={styles.icon} />

          <View style={styles.textContainer}>
            <Text
              style={{ color: selectedTheme.secondary, paddingHorizontal: 5 }}
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
              }}
            >
              {task.date}
            </Text>
          </View>
        </View>

        {task.subTasks.map((subTask, index) => (
          <View key={index} style={styles.subTaskContainer}>
            <Text style={{ color: selectedTheme.secondary }}>-</Text>
            <Image
              source={isChecked ? checkedImg : uncheckedImg}
              style={[
                styles.checkbox,
                {
                  tintColor:
                    colorScheme() === "light"
                      ? selectedTheme.secondary
                      : selectedTheme.primary,
                  height: 25,
                  width: 25,
                },
              ]}
            />
            <Text style={{ color: selectedTheme.secondary }}>
              {subTask.name}
            </Text>
          </View>
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
    alignItems: "center",
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
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  icon: {
    height: 44,
    width: 44,
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
