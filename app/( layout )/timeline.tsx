import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { getToasts } from "../../services/storage";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { months } from "../../services/time";

import toastsMoods from "../../services/toasts";
import TimelineCard from "../../components/TimelineCard";
import MonthCard from "../../components/MonthCard";

export default function Timeline() {
  const [toasts, setToasts] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());
    };

    loadToasts();
  }, []);

  return (
    <View style={styles.scroll}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <MonthCard
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            timeline={true}
          />
          {toasts
            ?.sort(
              (a, b) =>
                new Date(a.date.split("T")[0]).getTime() -
                new Date(b.date.split("T")[0]).getTime()
            )
            ?.map((toast) => (
              <TimelineCard
                key={toast.date}
                toast={toast}
                img={toastsMoods[toast.moodArray][toast.selectedToast - 1].img}
              />
            ))}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <LinearGradient
        colors={["rgba(255,255,255, 0)", "#E3A062", "rgba(255,255,255, 0)"]}
        style={styles.timebar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    zIndex: 1,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
    marginTop: 108,
    marginBottom: 100,
  },
  timebar: {
    marginTop: 108,
    width: 2,
    height: 650,
    position: "absolute",
    left: 34,
  },
});
