import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { checkDate, dataCalendar } from "../../services/calendarServices";
import { loadToasts } from "../../services/loadToasts";
import { weekDays } from "../../services/time";
import { Toast } from "../../types/toasts.types";
import { DataCalendar, FirstDayOfTheWeek } from "../../types/time.types";
import Calendar from "../../components/calendar/Calendar";

export default function Index() {
  const [toasts, setToasts] = useState<Toast[] | null>(null);
  const [weekPreference, setWeekPreference] =
    useState<FirstDayOfTheWeek | null>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const ref = useRef<FlashList<DataCalendar>>();

  const index: number = parseInt(useLocalSearchParams().index as string);
  const previousOffset: number = parseInt(
    useLocalSearchParams().previousOffset as string
  );

  useLayoutEffect(() => {
    loadToasts(setToasts, setWeekPreference);
  }, []);

  useLayoutEffect(() => {
    const scrollOnLoad = (): void => {
      ref?.current?.scrollToOffset({ offset: previousOffset, animated: false });
    };

    scrollOnLoad();
  }, []);

  const renderItem = useCallback(
    ({ item, index }) => (
      <Calendar
        selectedMonth={item.month}
        selectedYear={item.year}
        weekDays={() => weekDays(weekPreference)}
        toasts={toasts?.filter(
          (toast) => toast.date.slice(0, 7) === checkDate(item.year, item.month)
        )}
        index={index}
        currentOffset={currentOffset}
      />
    ),
    [toasts, weekPreference]
  );

  return (
    <View style={{ zIndex: 1, flex: 1 }}>
      <SafeAreaView style={styles.scroll}>
        <View style={styles.container}>
          <FlashList<DataCalendar>
            contentContainerStyle={{ paddingTop: 95, paddingBottom: 35 }}
            inverted
            ref={ref}
            estimatedItemSize={707}
            showsVerticalScrollIndicator={false}
            initialScrollIndex={index}
            data={dataCalendar.flat(Infinity).reverse() as DataCalendar[]}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.month} ${item.year}`}
            onScroll={(e) => {
              setCurrentOffset(e.nativeEvent.contentOffset.y);
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    zIndex: 1,
  },
  container: {
    flex: 1,
    zIndex: 1,
    gap: 22,
  },
});
