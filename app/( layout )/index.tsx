import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import Calendar from "../../components/Calendar";
import { getToasts } from "../../services/storage";

import { months, years } from "../../services/time";
import { useState, useEffect, useCallback, useContext } from "react";
// import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const [toasts, setToasts] = useState(null);
  const [yearNumber, setYearNumber] = useState(new Date().getFullYear());
  // const { selectedTheme } = useContext(ThemeColorContext);

  // const onRefresh = useCallback(() => {
  //   if (yearNumber > 2022) {
  //     setYearNumber(yearNumber - 1);
  //   }
  // }, [yearNumber]);

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

  type DataCalendar = { month: string; year: string };

  const dataCalendar: DataCalendar[][] = years(2022 /*yearNumber*/).map(
    (year) =>
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
          <FlatList
            inverted
            data={dataCalendar.flat(Infinity).reverse() as DataCalendar[]}
            renderItem={({ item }) => (
              <Calendar
                selectedMonth={item.month}
                selectedYear={item.year}
                toasts={toasts.filter(
                  (toast) =>
                    toast.date.slice(0, 7) === checkDate(item.year, item.month)
                )}
              />
            )}
            keyExtractor={(item) => `${item.month} ${item.year}`}
            // onEndReached={onRefresh}
          ></FlatList>
          <StatusBar style="auto" />
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 108,
    marginBottom: 143,
    zIndex: 1,
    gap: 22,
  },
});
