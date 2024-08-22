import { StatusBar } from "expo-status-bar";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import Calendar from "../../components/Calendar";
import { getToasts } from "../../services/storage";

import { months, years } from "../../services/time";
import { useRef, useState, useEffect, useCallback } from "react";

export default function Index() {
  const scrollViewRef = useRef<ScrollView>();
  const [isLoading, setIsLoading] = useState(true);

  const [toasts, setToasts] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [yearNumber, setYearNumber] = useState(2024);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setYearNumber(yearNumber - 1);
      setRefreshing(false);
    }, 100);
  }, [yearNumber]);

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());

      setIsLoading(false);
    };

    loadToasts();
  }, []);

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

  return (
    <ScrollView
      style={styles.scroll}
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      onContentSizeChange={() => {
        if (yearNumber === 2024) {
          return scrollViewRef.current.scrollToEnd({ animated: false });
        }

        return scrollViewRef.current.scrollTo({
          y: 2023 * 3 - 35,
          animated: false,
        });
      }}
      refreshControl={
        yearNumber > 2022 ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : null
      }
    >
      <View style={styles.container}>
        {years(yearNumber).map((year) =>
          months
            .filter(
              (month) =>
                months.indexOf(month) <= new Date().getMonth() ||
                year !== new Date().getFullYear()
            )
            .map((month) => (
              <Calendar
                selectedMonth={month}
                selectedYear={year}
                toasts={toasts.filter(
                  (toast) => toast.date.slice(0, 7) === checkDate(year, month)
                )}
                key={`${month} ${year}`}
              />
            ))
        )}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginBottom: 250,
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
