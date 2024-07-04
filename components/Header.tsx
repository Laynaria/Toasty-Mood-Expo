import { Pressable, StyleSheet, View, Image } from "react-native";

const toDoIcon = require("../assets/icons/todo.png");
const themeIcon = require("../assets/icons/theme.png");

export default function Header() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttons}>
        <Image source={toDoIcon} />
      </Pressable>

      <View style={styles.background} />

      <Pressable style={styles.buttons}>
        <Image source={themeIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 30,
  },
  buttons: {
    marginTop: 10,
    backgroundColor: "#E3A062",
    padding: 15,
    borderRadius: 15,
  },
  background: {
    top: 0,
    backgroundColor: "#E3A062",
    zIndex: -1,
    width: "120%",
    position: "absolute",
    height: 83,
  },
});
