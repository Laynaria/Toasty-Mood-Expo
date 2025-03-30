import { useContext, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  Easing,
  ReduceMotion,
  SharedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

type Props = {
  item: string | number | null;
  currentScrollIndex: number;
  array: string[] | number[];
  handleClick: (e: number) => void;
};

export default function SelectCard({
  item,
  currentScrollIndex,
  array,
  handleClick,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const opacity: SharedValue<number> = useSharedValue(1);

  const handleOpacity = (): number => {
    if (
      array.indexOf(item as never) > currentScrollIndex - 0.5 &&
      array.indexOf(item as never) < currentScrollIndex + 0.5
    ) {
      return 1;
    }

    return 0.5;
  };

  useEffect(() => {
    opacity.value = withTiming(handleOpacity(), {
      duration: 150,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });
  }, [currentScrollIndex]);

  return (
    <Pressable
      style={styles.container}
      key={item}
      onPress={() => handleClick(array.indexOf(item as never))}
    >
      <Animated.Text
        style={[
          styles.texts,
          {
            color: selectedTheme.secondary,
            opacity,
          },
        ]}
      >
        {item}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    height: 40,
  },
  texts: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
