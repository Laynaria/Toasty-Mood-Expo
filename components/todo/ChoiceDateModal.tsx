import { useContext, useLayoutEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoDate } from "@/types/todo.types";
import { days, daysInMonth, months, weekDays } from "@/services/time";
import { FirstDayOfTheWeek } from "@/types/time.types";
import { getFirstDayPreference } from "@/services/storage";
import ChoiceDateArrowButton from "./ChoiceDateArrowButtons";

const monthArrow = require("@/assets/todo-icons/simple-arrow.png");
const yearArrow = require("@/assets/todo-icons/double-arrow.png");

type Props = {
  changeDate: (selectedDate: toDoDate) => void;
  openChangeDateModal: () => void;
};

export default function ChoiceDateModal({
  changeDate,
  openChangeDateModal,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [weekPreference, setWeekPreference] =
    useState<FirstDayOfTheWeek | null>(null);

  const daysName: string[] = weekDays(weekPreference);

  const onChangeDate = () => {
    const selectDate = new Date().toString();

    changeDate(selectDate);
    openChangeDateModal();
  };

  useLayoutEffect(() => {
    const loadWeekPreference = async () =>
      setWeekPreference(await getFirstDayPreference());

    loadWeekPreference();
  }, []);

  return (
    <Pressable style={styles.container} onPress={openChangeDateModal}>
      <View
        style={[
          styles.subContainer,
          { backgroundColor: selectedTheme.primary },
        ]}
      >
        <View style={styles.monthYearContainer}>
          <ChoiceDateArrowButton source={yearArrow} />
          <ChoiceDateArrowButton source={monthArrow} />
          <Text style={{ color: selectedTheme.secondary }}>
            {selectedMonth} {selectedYear}
          </Text>
          <ChoiceDateArrowButton source={monthArrow} rotate={"180deg"} />
          <ChoiceDateArrowButton source={yearArrow} rotate={"180deg"} />
        </View>

        <View style={styles.daysContainer}>
          {daysName.map((day) => (
            <Text
              style={[
                styles.daysStyle,
                {
                  textAlign: "center",
                  color: selectedTheme.secondary,
                  borderColor: "transparent",
                },
              ]}
              key={day}
            >
              {day}
            </Text>
          ))}

          {days
            .filter(
              (day: number) => day <= daysInMonth(selectedYear, selectedMonth)
            )
            .map((day) => (
              <Pressable
                key={day}
                style={[
                  styles.daysStyle,
                  { borderColor: selectedTheme.secondary },
                ]}
              >
                <Text style={{ color: selectedTheme.secondary }}>{day}</Text>
              </Pressable>
            ))}
        </View>

        <View
          style={[styles.monthYearContainer, { width: "100%", padding: 8 }]}
        >
          <Text
            style={{
              color: selectedTheme.secondary,
              borderColor: selectedTheme.secondary,
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
            }}
          >
            XX:XX
          </Text>
          <Pressable>
            <Text
              style={{
                color: selectedTheme.secondary,
                borderColor: selectedTheme.secondary,
                borderWidth: 1,
                borderRadius: 8,
                padding: 8,
              }}
            >
              Validate
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 20,
    backgroundColor: "rgba(0 ,0 ,0 , 0.2)",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  subContainer: {
    padding: 16,
    borderRadius: 16,
    margin: 16,
    alignItems: "center",
    gap: 8,
    width: 348,
  },
  monthYearContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  daysStyle: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
  },
});
