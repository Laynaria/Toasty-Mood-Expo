import { useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";

type Props = {
  icon: ImageSourcePropType;
  handleValidate: () => void;
};

export default function IconButton({ icon, handleValidate }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={[
        styles.registerButton,
        {
          borderColor: selectedTheme.secondary,
        },
      ]}
      onPress={handleValidate}
    >
      <Image
        source={icon}
        style={[styles.registerIcon, { tintColor: selectedTheme.secondary }]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  registerButton: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  registerIcon: {
    height: 30,
    width: 30,
  },
});
