import { Link, router, useGlobalSearchParams, usePathname } from "expo-router";
import { useContext } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemeColorContext } from "../contexts/ThemeColorContext";

const addToastIcon = require("../assets/toasts/toast-okay.png");

const homeIcon = require("../assets/icons/home.png");
const timelineIcon = require("../assets/icons/timeline.png");
const shopIcon = require("../assets/icons/shop.png");
const settingsIcon = require("../assets/icons/settings.png");

export default function Navbar() {
  const path = usePathname();
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View
      style={[styles.container, { backgroundColor: selectedTheme.primary }]}
    >
      <Link href="/" asChild style={styles.link}>
        <Pressable>
          <Image
            source={homeIcon}
            style={{
              tintColor: path === "/" ? "#FFF" : selectedTheme.secondary,
            }}
          />
        </Pressable>
      </Link>

      <Link href="/timeline" asChild style={styles.link}>
        <Pressable>
          <Image
            source={timelineIcon}
            style={{
              tintColor:
                path === "/timeline" ? "#FFF" : selectedTheme.secondary,
            }}
          />
        </Pressable>
      </Link>

      <Pressable
        style={[styles.addButton, { backgroundColor: selectedTheme.primary }]}
        onPress={() =>
          router.navigate({
            pathname: `/new-toast/${new Date().toString()}`,
            params: { previousPage: path },
          })
        }
      >
        <Image source={addToastIcon} />
      </Pressable>

      <Link href="/shop" asChild style={styles.link}>
        <Pressable>
          <Image
            source={shopIcon}
            style={{
              tintColor: path === "/shop" ? "#FFF" : selectedTheme.secondary,
            }}
          />
        </Pressable>
      </Link>

      <Link href="/settings" asChild style={styles.link}>
        <Pressable>
          <Image
            source={settingsIcon}
            style={{
              tintColor:
                path === "/settings" ? "#FFF" : selectedTheme.secondary,
            }}
          />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 2,
  },
  link: {
    padding: 15,
  },
  addButton: {
    marginTop: -45,
    padding: 15,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: "white",
  },
});
