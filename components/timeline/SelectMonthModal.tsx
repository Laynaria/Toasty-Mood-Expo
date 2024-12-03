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
  const [newYear, setNewYear] = useState<string>(selectedYear);
  const { selectedTheme } = useContext(ThemeColorContext);

  const cancelChange = () => {
    closeModal();
  };

  const validateChange = () => {
    timelineFunction("November", 2024);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.modal, { backgroundColor: selectedTheme.primary }]}>
        <Text
          style={{
            color: selectedTheme.secondary,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Sélectionnez une date
        </Text>

        <SelectList array={months} />
        <SelectList array={years(2018)} />

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
  buttons: {
    flexBasis: "50%",
  },
  texts: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
