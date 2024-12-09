import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { months, years } from "../../services/time";
import SelectValidationButton from "./SelectValidationButton";
import SelectList from "./SelectList";

export default function SelectMonthModal({
  timelineFunction,
  closeModal,
  selectedMonth,
  selectedYear,
}) {
  const [newMonth, setNewMonth] = useState<string>(selectedMonth);
  const [newYear, setNewYear] = useState<number>(selectedYear);
  const { selectedTheme } = useContext(ThemeColorContext);

  const cancelChange = () => {
    closeModal();
  };

  const validateChange = () => {
    timelineFunction(newMonth, newYear);
    closeModal();
  };

  const handleMonthChange = (month) => {
    setNewMonth(month);
  };

  const handleYearChange = (year) => {
    setNewYear(year);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.modal, { backgroundColor: selectedTheme.primary }]}>
        <Text style={[styles.title, { color: selectedTheme.secondary }]}>
          Select period
        </Text>

        <SelectList
          array={months}
          handleFunction={handleMonthChange}
          current={selectedMonth}
        />
        <SelectList
          array={years(2022)}
          handleFunction={handleYearChange}
          current={selectedYear}
        />

        <View
          style={[
            styles.lineDecoration,
            { top: "50%", backgroundColor: selectedTheme.secondary },
          ]}
        />

        <View
          style={[
            styles.lineDecoration,
            { top: "70%", backgroundColor: selectedTheme.secondary },
          ]}
        />

        <SelectValidationButton
          text={"Cancel"}
          buttonFunction={cancelChange}
          style={{
            backgroundColor: selectedTheme.primary,
            color: selectedTheme.secondary,
            borderColor: selectedTheme.secondary,
          }}
        />

        <SelectValidationButton
          text={"Ok"}
          buttonFunction={validateChange}
          style={{
            backgroundColor: selectedTheme.secondary,
            color: selectedTheme.primary,
            borderColor: selectedTheme.primary,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    zIndex: 10,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    padding: 30,
    maxWidth: "70%",
    rowGap: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    width: "100%",
    textAlign: "center",
  },
  lineDecoration: {
    position: "absolute",
    height: 1,
    width: "70%",
    backgroundColor: "black",
    left: "25%",
  },
});
