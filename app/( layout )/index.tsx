import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import Calendar from "../../components/Calendar";
import { getToasts } from "../../services/storage";

import { months, years } from "../../services/time";
import { useRef, useState, useEffect } from "react";

export default function Index() {
  const scrollViewRef = useRef<ScrollView>();
  const [isLoading, setIsLoading] = useState(true);

  const [toasts, setToasts] = useState(null);

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
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: false })
      }
    >
      <View style={styles.container}>
        {years().map((year) =>
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
