import { useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import { usePathname } from "expo-router";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { handleHeaderNavigation } from "../../services/layoutService";

type Props = {
  link: "/todo" | "/theme";
  icon: ImageSourcePropType;
};

export default function HeaderButton({ link, icon }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const path: string = usePathname();

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: selectedTheme.primary,
        },
      ]}
      onPress={() => handleHeaderNavigation(link, path)}
    >
      <Image
        source={icon}
        style={{ tintColor: selectedTheme.secondary }}
        accessibilityLabel={`${link.split("/")[1]} page icon`}
      />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 15,
    borderRadius: 15,
  },
});
