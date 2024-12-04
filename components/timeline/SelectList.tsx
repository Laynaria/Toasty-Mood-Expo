import { StyleSheet } from "react-native";

import SelectCard from "./SelectCard";
import Animated from "react-native-reanimated";
import { useState } from "react";

export default function SelectList({ array, handleFunction }) {
  const [currentScrollItem, setCurrentScrollItem] = useState<string | number>(
    null
  );

  const handleScroll = (currentItem) => {
    handleFunction(currentItem);
    setCurrentScrollItem(currentItem);
  };

  return (
    <Animated.FlatList
      style={styles.container}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={40}
      data={[null, ...array, null]} // until we find out how to have infinite scroll
      renderItem={({ item }) => (
        <SelectCard item={item} currentScrollItem={currentScrollItem} />
      )}
      onViewableItemsChanged={({ viewableItems }) =>
        handleScroll(viewableItems[1]?.item)
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: "50%",
    height: 120,
  },
});
