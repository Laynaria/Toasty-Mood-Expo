import { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import SelectCard from "./SelectCard";

export default function SelectList({ array, handleFunction, current }) {
  const [currentScrollIndex, setCurrentScrollIndex] = useState<string | number>(
    null
  );
  const ref = useRef<FlatList>();

  const handleScroll = (currentItem) => {
    setCurrentScrollIndex(currentItem);
  };

  const handleSelectionScroll = (currentItem) => {
    handleFunction(currentItem);
  };

  const ITEM_HEIGHT = 40;

  const handleClick = (e) => {
    if (e >= 0) {
      ref?.current?.scrollToIndex({ index: e });
    }
  };

  return (
    <Animated.FlatList
      ref={ref}
      style={styles.container}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={ITEM_HEIGHT}
      data={[null, ...array, null]}
      renderItem={({ item }) => (
        <SelectCard
          item={item}
          currentScrollIndex={currentScrollIndex}
          array={array}
          handleClick={handleClick}
        />
      )}
      initialScrollIndex={array.indexOf(current)}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      onViewableItemsChanged={({ viewableItems }) =>
        handleSelectionScroll(viewableItems[1]?.item)
      }
      onScroll={(e) => {
        handleScroll(e.nativeEvent.contentOffset.y / 40);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: "50%",
    height: 120,
  },
});
