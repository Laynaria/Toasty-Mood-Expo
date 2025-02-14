import { router, usePathname } from "expo-router";
import { useContext } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import toastsMoods from "../../services/toasts";
import NavLink from "./NavLink";

const homeIcon = require("../../assets/icons/home.png");
const timelineIcon = require("../../assets/icons/timeline.png");
const shopIcon = require("../../assets/icons/shop.png");
const settingsIcon = require("../../assets/icons/settings.png");

export default function Navbar() {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const { selectedThemeToast } = useContext(ThemeToastContext);
  const path = usePathname();

  const selectedColor = () => {
    return colorScheme() === "light" ? "#FFFFFF" : selectedTheme.darkBackground;
  };

  return (
    <View
      style={[styles.container, { backgroundColor: selectedTheme.primary }]}
    >
      <NavLink link="/" icon={homeIcon} selectedColor={selectedColor} />

      <NavLink
        link="/timeline"
        icon={timelineIcon}
        selectedColor={selectedColor}
      />

      <Pressable
        style={[
          styles.addButton,
          {
            backgroundColor: selectedTheme.primary,
            borderColor:
              colorScheme() === "light"
                ? "white"
                : selectedTheme.darkBackground,
          },
        ]}
        onPress={() =>
          router.navigate({
            pathname: `/new-toast/${new Date().toString()}`,
            params: { previousPage: path },
          })
        }
      >
        <Image source={toastsMoods[selectedThemeToast][1].img} />
      </Pressable>

      <NavLink link="/shop" icon={shopIcon} selectedColor={selectedColor} />

      <NavLink
        link="/settings"
        icon={settingsIcon}
        selectedColor={selectedColor}
      />
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
  },
});
