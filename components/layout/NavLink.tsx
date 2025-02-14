import { Link, usePathname } from "expo-router";
import { useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

type Props = {
  link: string;
  icon: ImageSourcePropType;
  selectedColor: () => string;
};

export default function NavLink({ link, icon, selectedColor }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const path = usePathname();

  return (
    <Link href={link} asChild style={styles.link}>
      <Pressable>
        <Image
          source={icon}
          style={{
            tintColor:
              path === link ? selectedColor() : selectedTheme.secondary,
          }}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: 15,
  },
});
