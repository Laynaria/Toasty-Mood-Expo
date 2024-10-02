import { router, usePathname } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

const toDoIcon = require("../assets/icons/todo.png");
const themeIcon = require("../assets/icons/theme.png");

export default function Header() {
  const { selectedTheme } = useContext(ThemeColorContext);
  const path = usePathname();

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          backgroundColor: selectedTheme.primary,
          marginTop: 10,
          padding: 15,
          borderRadius: 15,
        }}
        onPress={() =>
          router.navigate({
            pathname: "/todo",
            params: { previousPage: path },
          })
        }
      >
        <Image
          source={toDoIcon}
          style={{ tintColor: selectedTheme.secondary }}
        />
      </Pressable>

      <View
        style={[styles.background, { backgroundColor: selectedTheme.primary }]}
      />

      <Pressable
        style={{
          backgroundColor: selectedTheme.primary,
          marginTop: 10,
          padding: 15,
          borderRadius: 15,
        }}
        onPress={() =>
          router.navigate({
            pathname: "/theme",
            params: { previousPage: path },
          })
        }
      >
        <Image
          source={themeIcon}
          style={{ tintColor: selectedTheme.secondary }}
        />
      </Pressable>
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
