import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import temperatureIcons from "../../services/temperature";
import { getToasts } from "../../services/storage";
import weatherIcons from "../../services/weather";
import toastsMoods from "../../services/toasts";
import { months } from "../../services/time";
import MonthCard from "../../components/MonthCard";
import TimelineCard from "../../components/timeline/TimelineCard";
import SelectMonthModal from "../../components/timeline/SelectMonthModal";

export default function Timeline() {
  const [toasts, setToasts] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { selectedTheme } = useContext(ThemeColorContext);

  const [isSelectingMonth, setIsSelectingMonth] = useState<Boolean>(false);

  const { selectedThemeToast, selectOverride } = useContext(ThemeToastContext);

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());
    };

    loadToasts();
  }, []);

  const handleMonthChange = (newMonth, newYear) => {
    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
  };

  const closeModal = () => setIsSelectingMonth(false);

  return (
    <>
      <View style={styles.scroll}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <MonthCard
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              timeline={true}
              setIsSelectingMonth={setIsSelectingMonth}
            />
            {toasts
              ?.sort(
                (a, b) =>
                  new Date(a.date.split("T")[0]).getTime() -
                  new Date(b.date.split("T")[0]).getTime()
              )
              .filter(
                (toast) =>
                  new Date(toast.date).getMonth() ===
                    months.indexOf(selectedMonth) &&
                  new Date(toast.date).getFullYear() === selectedYear
              )
              ?.map((toast) => (
                <TimelineCard
                  key={toast.date}
                  toast={toast}
                  img={
                    toastsMoods[
                      selectOverride ? selectedThemeToast : toast.moodArray
                    ][toast.selectedToast - 1].img
                  }
                  weatherImg={
                    toast.weather
                      ? weatherIcons[toast.weather - 1].img
                      : weatherIcons[0].img
                  }
                  temperatureImg={
                    toast.temperature
                      ? temperatureIcons[toast.temperature - 1].img
                      : temperatureIcons[1].img
                  }
                />
              ))}
          </View>
        </ScrollView>
        <LinearGradient
          colors={[
            "rgba(255,255,255, 0)",
            selectedTheme.primary,
            "rgba(255,255,255, 0)",
          ]}
          style={styles.timebar}
        />
      </View>

      {isSelectingMonth ? (
        <SelectMonthModal
          timelineFunction={handleMonthChange}
          closeModal={closeModal}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      ) : null}
    </>
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
