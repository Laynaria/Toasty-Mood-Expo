import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { useContext } from "react";
import {
  AnimatableStringValue,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";

type Props = {
  source: ImageSourcePropType;
  rotate?: AnimatableStringValue;
  handlePress: () => void;
};

export default function ChoiceDateArrowButton({
  source,
  rotate,
  handlePress,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  return (
    <Pressable onPress={handlePress}>
      <Image
        source={source}
        style={{
          transform: [{ rotate: rotate ? rotate : "0deg" }],
          tintColor: selectedTheme.secondary,
        }}
      />
    </Pressable>
  );
}
