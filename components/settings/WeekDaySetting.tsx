import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { FirstDayOfTheWeek } from "../../types/weekday.types";
import { getFirstDayPreference } from "../../services/storage";
import {
  firstDaySetting,
  handleFirstDayOfTheWeek,
} from "../../services/settingsService";

export default function WeekDaySetting() {
  const { selectedTheme } = useContext(ThemeColorContext);
  const [dayPreference, setDayPreference] =
    useState<FirstDayOfTheWeek>("system");

  useEffect(() => {
    const getPreference = async () => {
      const response: FirstDayOfTheWeek = await getFirstDayPreference();

      if (response) {
        setDayPreference(response);
      }
    };

    getPreference();
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: selectedTheme.primary }]}
    >
      <Text style={[styles.text, { color: selectedTheme.secondary }]}>
        First Day of The Week
      </Text>

      {firstDaySetting.map((day: FirstDayOfTheWeek) => (
        <Pressable
          key={day}
          onPress={() =>
            handleFirstDayOfTheWeek(day, dayPreference, setDayPreference)
          }
          style={[
            styles.button,
            {
              backgroundColor:
                day === dayPreference
                  ? selectedTheme.secondary
                  : selectedTheme.primary,
              borderColor: selectedTheme.secondary,
            },
          ]}
        >
          <Text
            style={{
              color:
                day === dayPreference
                  ? selectedTheme.primary
                  : selectedTheme.secondary,
              textTransform: "capitalize",
            }}
          >
            {day}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 24,
    width: "90%",
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 30,
    borderRadius: 16,
  },
  text: {
    fontWeight: "bold",
    width: "100%",
  },
  button: {
    flex: 1,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 2,
  },
});
