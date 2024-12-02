import { useContext } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { months, years } from "../../services/time";

export default function SelectMonthModal({ timelineFunction, closeModal }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View style={styles.container}>
      <View style={[styles.modal, { backgroundColor: selectedTheme.primary }]}>
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

        <Pressable style={styles.buttons} onPress={closeModal}>
          <Text
            style={[
              styles.texts,
              {
                color: selectedTheme.secondary,
              },
            ]}
          >
            Cancel
          </Text>
        </Pressable>

        <Pressable style={styles.buttons}>
          <Text
            style={[
              styles.texts,
              {
                color: selectedTheme.secondary,
              },
            ]}
          >
            Ok
          </Text>
        </Pressable>
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
    maxWidth: "60%",
    rowGap: 15,
    flexDirection: "row",
    justifyContent: "center",
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
