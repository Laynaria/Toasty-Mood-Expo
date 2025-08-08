import { useContext, useLayoutEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { toDoDate } from "@/types/todo.types";
import { days, daysInMonth, months, weekDays } from "@/services/time";
import { FirstDayOfTheWeek } from "@/types/time.types";
import { getFirstDayPreference } from "@/services/storage";
import ChoiceDateArrowButton from "./ChoiceDateArrowButtons";
import ModalBackground from "../ModalBackground";
import ChoiceDateTextButtons from "./ChoiceDateTextButtons";
import ChoiceDateHour from "./ChoiceDateHour";

const monthArrow = require("@/assets/todo-icons/simple-arrow.png");
const yearArrow = require("@/assets/todo-icons/double-arrow.png");

type Props = {
  date: toDoDate;
  changeDate: (selectedDate: toDoDate) => void;
  openChangeDateModal: () => void;
  bottom: number;
};

export default function ChoiceDateModal({
  date,
  changeDate,
  openChangeDateModal,
  bottom,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    date ? months[new Date(date).getMonth()] : months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    date
      ? new Date(date).getFullYear().toString()
      : new Date().getFullYear().toString()
  );
  const [selectedDay, setSelectedDay] = useState<number>(
    date ? new Date(date).getDate() : new Date().getDate()
  );
  const [weekPreference, setWeekPreference] =
    useState<FirstDayOfTheWeek | null>(null);

  const [isHourModalOpen, setIsHourModalOpen] = useState<boolean>(false);
  const [selectedHour, setSelectedHour] = useState<string>(
    date ? new Date(date).getHours().toString().padStart(2, "0") : "00"
  );
  const [selectedMinute, setSelectedMinute] = useState<string>(
    date ? new Date(date).getMinutes().toString().padStart(2, "0") : "00"
  );

  const daysName: string[] = weekDays(weekPreference);

  const handleChangeMonth = (operator: "-" | "+"): void => {
    if (selectedMonth === months[0] && operator === "-") {
      return setSelectedMonth(months[11]);
    }

    if (selectedMonth === months[11] && operator === "+") {
      return setSelectedMonth(months[0]);
    }

    operator === "-"
      ? setSelectedMonth(months[months.indexOf(selectedMonth) - 1])
      : setSelectedMonth(months[months.indexOf(selectedMonth) + 1]);
  };

  const handleChangeYear = (operator: "-" | "+"): void => {
    if (selectedYear === "2022" && operator === "-") {
      return;
    }

    operator === "-"
      ? setSelectedYear(`${parseInt(selectedYear) - 1}`)
      : setSelectedYear(`${parseInt(selectedYear) + 1}`);
  };

  const handleValidate = () => {
    const selectDate = new Date(
      `${selectedYear}-${
        months.indexOf(selectedMonth) + 1
      }-${selectedDay}T${selectedHour}:${selectedMinute}:00`
    ).toString();

    changeDate(selectDate);
    openChangeDateModal();
  };

  useLayoutEffect(() => {
    const loadWeekPreference = async () =>
      setWeekPreference(await getFirstDayPreference());

    loadWeekPreference();
  }, []);

  return (
    <ModalBackground handlePress={openChangeDateModal} alignItems={"flex-end"}>
      <Pressable
        style={[
          styles.subContainer,
          { backgroundColor: selectedTheme.primary, bottom },
        ]}
        onPress={() => {}}
      >
        <View style={styles.monthYearContainer}>
          <ChoiceDateArrowButton
            source={yearArrow}
            handlePress={() => handleChangeYear("-")}
          />
          <ChoiceDateArrowButton
            source={monthArrow}
            handlePress={() => handleChangeMonth("-")}
          />
          <Text
            style={{
              color: selectedTheme.secondary,
              width: 115,
              textAlign: "center",
            }}
          >
            {selectedMonth} {selectedYear}
          </Text>
          <ChoiceDateArrowButton
            source={monthArrow}
            rotate={"180deg"}
            handlePress={() => handleChangeMonth("+")}
          />
          <ChoiceDateArrowButton
            source={yearArrow}
            rotate={"180deg"}
            handlePress={() => handleChangeYear("+")}
          />
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
                  {
                    borderColor:
                      selectedDay === day
                        ? selectedTheme.primary
                        : selectedTheme.secondary,
                    backgroundColor:
                      selectedDay === day
                        ? selectedTheme.secondary
                        : selectedTheme.primary,
                  },
                ]}
                onPress={() => {
                  setSelectedDay(day);
                }}
              >
                <Text
                  style={{
                    color:
                      selectedDay === day
                        ? selectedTheme.primary
                        : selectedTheme.secondary,
                  }}
                >
                  {day}
                </Text>
              </Pressable>
            ))}
        </View>

        <View
          style={[
            styles.monthYearContainer,
            {
              width: "100%",
              padding: 8,
              marginTop: selectedMonth === months[1] ? 37.5 : 0,
            },
          ]}
        >
          <ChoiceDateTextButtons
            text={`${selectedHour}:${selectedMinute}`}
            handlePress={() => setIsHourModalOpen(true)}
          />

          <ChoiceDateTextButtons
            text={"Validate"}
            handlePress={handleValidate}
          />
        </View>
      </Pressable>

      {isHourModalOpen && (
        <ModalBackground handlePress={() => setIsHourModalOpen(false)}>
          <ChoiceDateHour
            selectedHour={selectedHour}
            setSelectedHour={setSelectedHour}
            selectedMinute={selectedMinute}
            setSelectedMinute={setSelectedMinute}
            bottom={bottom}
          />
        </ModalBackground>
      )}
    </ModalBackground>
  );
}

const styles = StyleSheet.create({
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
