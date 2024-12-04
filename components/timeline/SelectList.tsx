import { StyleSheet } from "react-native";

import SelectCard from "./SelectCard";
import Animated from "react-native-reanimated";

export default function SelectList({ array, handleFunction }) {
  return (
    <Animated.FlatList
      style={styles.container}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={41}
      data={array}
      renderItem={({ item }) => (
        <SelectCard item={item} handleFunction={handleFunction} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: "50%",
    height: 120,
  },
});
