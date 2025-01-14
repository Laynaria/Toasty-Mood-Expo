import { useContext, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import Animated, {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function SelectCard({
  item,
  currentScrollIndex,
  array,
  handleClick,
}) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const opacity = useSharedValue(1);

  const handleOpacity = () => {
    if (
      array.indexOf(item) > currentScrollIndex - 0.5 &&
      array.indexOf(item) < currentScrollIndex + 0.5
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
      onPress={() => handleClick(array.indexOf(item))}
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
