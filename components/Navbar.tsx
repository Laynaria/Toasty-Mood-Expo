import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const homeIcon = require("../assets/icons/home-icon.png");
const timelineIcon = require("../assets/icons/timeline.png");
const shopIcon = require("../assets/icons/shop.png");
const settingsIcon = require("../assets/icons/settings.png");

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Link href="/" asChild style={styles.link}>
        <Pressable>
          <Image source={homeIcon} />
        </Pressable>
      </Link>

      <Link href="/timeline" asChild style={styles.link}>
        <Pressable>
          <Image source={timelineIcon} />
        </Pressable>
      </Link>

      <Link href="/shop" asChild style={styles.link}>
        <Pressable>
          <Image source={shopIcon} />
        </Pressable>
      </Link>

      <Link href="/settings" asChild style={styles.link}>
        <Pressable>
          <Image source={settingsIcon} />
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
});
