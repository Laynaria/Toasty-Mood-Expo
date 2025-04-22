import { useContext } from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import { days, months, getDaysName, daysInMonth } from "../../services/time";
import { getToastByDay } from "../../services/calendarServices";
import { Toast } from "../../types/toasts.types";
import toastsMoods from "../../services/toasts";
import CalendarCard from "./CalendarCard";
import MonthCard from "../MonthCard";
import { CalendarDayType } from "@/types/time.types";

const toastEmpty: ImageSourcePropType = require("../../assets/icons/toast-empty.png");

type Props = {
  selectedMonth: string;
  selectedYear: string;
  toasts: Toast[] | undefined;
  weekDays: () => string[];
  index: number;
  currentOffset: number;
};

export default function Calendar({
  selectedMonth,
  selectedYear,
  toasts,
  weekDays,
  index,
  currentOffset,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const { selectedThemeToast, selectOverride } = useContext(ThemeToastContext);

  const daysName: string[] = weekDays();

  const firstDay: string = getDaysName(selectedYear, selectedMonth, 1);

  const firstDayFlexGrow: number = daysName.indexOf(firstDay);

  const lastDay: string = getDaysName(
    selectedYear,
    selectedMonth,
    daysInMonth(selectedYear, selectedMonth)
  );

  const lastDayFlexgrow: number = 6 - daysName.indexOf(lastDay);

  const imgSource = (day: CalendarDayType): ImageSourcePropType => {
    if (!day.toast) {
      return toastEmpty;
    }

    if (day.toast.isJamDay && day.toast.isBitey) {
      return toastsMoods[
        selectOverride ? selectedThemeToast : day.toast.moodArray
      ][day.toast.selectedToast - 1].biteyJamImg;
    }

    if (day.toast.isJamDay) {
      return toastsMoods[
        selectOverride ? selectedThemeToast : day.toast.moodArray
      ][day.toast.selectedToast - 1].jamImg;
    }

    if (day.toast.isBitey) {
      return toastsMoods[
        selectOverride ? selectedThemeToast : day.toast.moodArray
      ][day.toast.selectedToast - 1].biteyImg;
    }

    return toastsMoods[
      selectOverride ? selectedThemeToast : day.toast.moodArray
    ][day.toast.selectedToast - 1].img;
  };

  return (
    <View>
      <View style={[styles.container]}>
        <MonthCard selectedMonth={selectedMonth} selectedYear={selectedYear} />

        {daysName.map((day) => (
          <Text
            style={[styles.daysName, { color: selectedTheme.primary }]}
            key={day}
          >
            {day}
          </Text>
        ))}

        {firstDayFlexGrow > 0 ? (
          <View
            style={{
              width: firstDayFlexGrow * 49,
            }}
          />
        ) : (
          ""
        )}

        {days
          .filter(
            (day: number) => day <= daysInMonth(selectedYear, selectedMonth)
          )
          .map((day: number) => ({
            day,
            toast: getToastByDay(
              day,
              toasts,
              months,
              selectedYear,
              selectedMonth
            ),
          }))
          .map((day: CalendarDayType) => (
            <CalendarCard
              day={day}
              date={
                new Date(
                  `${selectedYear}-${months.indexOf(selectedMonth) + 1}-${
                    day.day
                  }T03:22:00`
                )
              }
              index={index}
              currentOffset={currentOffset}
              key={day.day}
              imgSource={imgSource(day)}
            />
          ))}

        <View
          style={{
            width: lastDayFlexgrow * 49,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: 3,
    rowGap: 24,
    paddingTop: 48,
    height: 707,
  },
  daysName: {
    width: 46,
    textAlign: "center",
  },
});
