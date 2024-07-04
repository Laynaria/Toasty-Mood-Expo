import { Link, usePathname } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

const addToastIcon = require("../assets/toasts/toast-okay.png");

const homeIcon = require("../assets/icons/home.png");
const timelineIcon = require("../assets/icons/timeline.png");
const shopIcon = require("../assets/icons/shop.png");
const settingsIcon = require("../assets/icons/settings.png");

const homeClicked = require("../assets/icons/home-clicked.png");
const timelineClicked = require("../assets/icons/timeline-clicked.png");
const shopClicked = require("../assets/icons/shop-clicked.png");
const settingsClicked = require("../assets/icons/settings-clicked.png");

export default function Navbar() {
  const path = usePathname();
  return (
    <View style={styles.container}>
      <Link href="/" asChild style={styles.link}>
        <Pressable>
          <Image source={path === "/" ? homeClicked : homeIcon} />
        </Pressable>
      </Link>

      <Link href="/timeline" asChild style={styles.link}>
        <Pressable>
          <Image
            source={path === "/timeline" ? timelineClicked : timelineIcon}
          />
        </Pressable>
      </Link>

      <Link href="/new-toast" asChild style={styles.addButton}>
        <Pressable>
          <Image source={addToastIcon} />
        </Pressable>
      </Link>

      <Link href="/shop" asChild style={styles.link}>
        <Pressable>
          <Image source={path === "/shop" ? shopClicked : shopIcon} />
        </Pressable>
      </Link>

      <Link href="/settings" asChild style={styles.link}>
        <Pressable>
          <Image
            source={path === "/settings" ? settingsClicked : settingsIcon}
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
    backgroundColor: "#E3A062",
    paddingVertical: 10,
  },
  link: {
    padding: 15,
  },
  addButton: {
    marginTop: -45,
    backgroundColor: "#E3A062",
    padding: 15,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: "white",
  },
});
