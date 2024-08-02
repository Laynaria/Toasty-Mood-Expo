import { Link } from "expo-router";
import { Pressable, StyleSheet, View, Image } from "react-native";

const toDoIcon = require("../assets/icons/todo.png");
const themeIcon = require("../assets/icons/theme.png");

export default function Header() {
  return (
    <View style={styles.container}>
      <Link href="/todo" asChild>
        <Pressable style={styles.buttons}>
          <Image source={toDoIcon} />
        </Pressable>
      </Link>

      <View style={styles.background} />

      <Link href="/theme" asChild>
        <Pressable style={styles.buttons}>
          <Image source={themeIcon} />
        </Pressable>
      </Link>
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
    zIndex: 1,
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
