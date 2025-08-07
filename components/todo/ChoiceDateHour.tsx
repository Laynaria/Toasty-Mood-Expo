import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { Dispatch, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectList from "../timeline/SelectList";
import { hours, minutes } from "@/services/time";

type Props = {
  selectedHour: string;
  setSelectedHour: Dispatch<string>;
  selectedMinute: string;
  setSelectedMinute: Dispatch<string>;
  bottom: number;
};

export default function ChoiceDateHour({
  selectedHour,
  setSelectedHour,
  selectedMinute,
  setSelectedMinute,
  bottom,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View
      style={[styles.modal, { backgroundColor: selectedTheme.primary, bottom }]}
    >
      <SelectList
        array={hours}
        setStateOption={setSelectedHour}
        current={selectedHour}
      />

      <Text style={[styles.text, { color: selectedTheme.secondary }]}>:</Text>

      <SelectList
        array={minutes}
        setStateOption={setSelectedMinute}
        current={selectedMinute}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    maxWidth: "30%",
    rowGap: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: 16,
    marginBottom: 37,
    marginLeft: 70,
  },
  text: {
    margin: 10,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
