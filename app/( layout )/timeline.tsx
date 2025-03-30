import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import { filteredArray } from "../../services/timelineServices";
import temperatureIcons from "../../services/temperature";
import weatherIcons from "../../services/weather";
import toastsMoods from "../../services/toasts";
import { months } from "../../services/time";
import { Toast } from "../../types/toasts.types";
import MonthCard from "../../components/MonthCard";
import TimelineCard from "../../components/timeline/TimelineCard";
import SelectMonthModal from "../../components/timeline/SelectMonthModal";
import { loadToasts } from "../../services/loadToasts";

export default function Timeline() {
  const { selectedTheme } = useContext(ThemeColorContext);
  const { selectedThemeToast, selectOverride } = useContext(ThemeToastContext);
  const [toasts, setToasts] = useState<Toast[] | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isSelectingMonth, setIsSelectingMonth] = useState<Boolean>(false);

  useEffect(() => {
    loadToasts(setToasts);
  }, []);

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

            {toasts &&
              filteredArray(toasts, months, selectedMonth, selectedYear)?.map(
                (toast) => (
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
                )
              )}
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
          closeModal={() => setIsSelectingMonth(false)}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
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
