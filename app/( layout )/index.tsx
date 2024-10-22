import { StyleSheet, View } from "react-native";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";

import { getFirstDayPreference, getToasts } from "../../services/storage";
import { months, weekDays, years } from "../../services/time";
import Calendar from "../../components/Calendar";
import { useLocalSearchParams, router } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState(null);
  const [weekPreference, setWeekPreference] = useState(null);
  const ref = useRef<any>();

  const pageY = parseInt(useLocalSearchParams().pageY as string);
  const index = parseInt(useLocalSearchParams().index as string);

  useEffect(() => {
    const load = async () => {
      setToasts(await getToasts());
      setWeekPreference(await getFirstDayPreference());

      setIsLoading(false);
    };

    load();
  }, []);

  const scrollOnLoad = () => {
    ref?.current?.scrollToIndex({
      index: index,
      viewOffset: 478 * index + pageY,
      viewPosition: index,
      animated: false,
    });

    router.setParams({ index: 0, pageY: 0 });
  };

  if (isLoading) {
    return <View />;
  }

  const checkDate = (year, month) => {
    return `${year}-${
      months.indexOf(month) >= 9
        ? months.indexOf(month) + 1
        : `0${months.indexOf(month) + 1}`
    }`;
  };

  type DataCalendar = { month: string; year: string };

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

  const checkMonth = (item) => {
    const index = dataCalendar
      .flat(Infinity)
      .findIndex(
        (i: DataCalendar) => i.month === item.month && i.year === item.year
      );

    if (index === 0) {
      return {
        marginTop: 108,
      };
    }

    if (index === dataCalendar.flat(Infinity).length - 1) {
      return {
        marginBottom: 143,
      };
    }

    return { marginBottem: 0 };
  };

  return (
    <View style={{ zIndex: 1, flex: 1 }}>
      <SafeAreaView style={styles.scroll}>
        <View style={styles.container}>
          <FlashList<DataCalendar>
            inverted
            ref={ref}
            estimatedItemSize={1000}
            showsVerticalScrollIndicator={false}
            onLoad={() => {
              scrollOnLoad();
            }}
            data={dataCalendar.flat(Infinity).reverse() as DataCalendar[]}
            renderItem={({ item, index }) => (
              <Calendar
                style={checkMonth(item)}
                selectedMonth={item.month}
                selectedYear={item.year}
                weekDays={() => weekDays(weekPreference)}
                toasts={toasts.filter(
                  (toast) =>
                    toast.date.slice(0, 7) === checkDate(item.year, item.month)
                )}
                index={index}
              />
            )}
            keyExtractor={(item) => `${item.month} ${item.year}`}
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
