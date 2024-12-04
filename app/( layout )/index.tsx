import { StyleSheet, View } from "react-native";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";

import { getFirstDayPreference, getToasts } from "../../services/storage";
import { months, weekDays, years } from "../../services/time";
import Calendar from "../../components/Calendar";

type DataCalendar = { month: string; year: string };

export default function Index() {
  const [toasts, setToasts] = useState(null);
  const [weekPreference, setWeekPreference] = useState(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const ref = useRef<FlashList<DataCalendar>>();

  const index = parseInt(useLocalSearchParams().index as string);
  const previousOffset = parseInt(
    useLocalSearchParams().previousOffset as string
  );

  useEffect(() => {
    const load = async () => {
      setToasts(await getToasts());
      setWeekPreference(await getFirstDayPreference());
    };

    load();
  }, []);

  const scrollOnLoad = () => {
    ref?.current?.scrollToOffset({ offset: previousOffset, animated: false });
  };

  const checkDate = (year, month) => {
    return `${year}-${
      months.indexOf(month) >= 9
        ? months.indexOf(month) + 1
        : `0${months.indexOf(month) + 1}`
    }`;
  };

  const dataCalendar: DataCalendar[][] = years(2022).map((year) =>
    months
      .filter(
        (month) =>
          months.indexOf(month) <= new Date().getMonth() ||
          year !== new Date().getFullYear()
      )
      .map((month) => ({
        month,
        year: year as string,
      }))
  );

  return (
    <View style={{ zIndex: 1, flex: 1 }}>
      <SafeAreaView style={styles.scroll}>
        <View style={styles.container}>
          <FlashList<DataCalendar>
            contentContainerStyle={{ paddingTop: 51, paddingBottom: 78 }}
            inverted
            ref={ref}
            estimatedItemSize={707}
            showsVerticalScrollIndicator={false}
            onLoad={() => {
              scrollOnLoad();
            }}
            initialScrollIndex={index}
            data={dataCalendar.flat(Infinity).reverse() as DataCalendar[]}
            renderItem={({ item, index }) => (
              <Calendar
                selectedMonth={item.month}
                selectedYear={item.year}
                weekDays={() => weekDays(weekPreference)}
                toasts={toasts?.filter(
                  (toast) =>
                    toast.date.slice(0, 7) === checkDate(item.year, item.month)
                )}
                index={index}
                currentOffset={currentOffset}
              />
            )}
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
