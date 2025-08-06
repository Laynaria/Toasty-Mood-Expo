import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { useContext } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  text: string;
  handlePress: () => void;
};

export default function ChoiceDateTextButtons({ text, handlePress }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  return (
    <Pressable onPress={handlePress}>
      <Text
        style={{
          color: selectedTheme.secondary,
          borderColor: selectedTheme.secondary,
          borderWidth: 1,
          borderRadius: 8,
          padding: 8,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}
