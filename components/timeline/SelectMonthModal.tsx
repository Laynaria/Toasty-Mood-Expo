import { useContext, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { months, years } from "../../services/time";
import SelectValidationButton from "./SelectValidationButton";

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

  const handleChange = () => {
    console.log("ok");
    return;
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

        <View style={styles.buttons}>
          {months.map((month) => (
            <Text
              key={month}
              style={[
                styles.texts,
                {
                  color: selectedTheme.secondary,
                },
              ]}
            >
              {month}
            </Text>
          ))}
        </View>

        <View style={styles.buttons}>
          {years(2018).map((year) => (
            <Text
              key={year}
              style={[
                styles.texts,
                {
                  color: selectedTheme.secondary,
                },
              ]}
            >
              {year}
            </Text>
          ))}
        </View>

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
          buttonFunction={handleChange}
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
