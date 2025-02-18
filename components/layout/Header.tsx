import { useContext } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import HeaderButton from "./HeaderButton";

const toDoIcon: ImageSourcePropType = require("../../assets/icons/todo.png");
const themeIcon: ImageSourcePropType = require("../../assets/icons/theme.png");

export default function Header() {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View style={styles.container}>
      <HeaderButton link={"/todo"} icon={toDoIcon} />

      <View
        style={[styles.background, { backgroundColor: selectedTheme.primary }]}
      />

      <HeaderButton link={"/theme"} icon={themeIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 30,
    zIndex: 2,
  },
  background: {
    top: 0,
    zIndex: -1,
    width: "120%",
    position: "absolute",
    height: 83,
  },
});
