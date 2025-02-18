import { useEffect, useState } from "react";
import {
  firstDaySetting,
  handleFirstDayOfTheWeek,
  loadFirstDayPreference,
} from "../../services/settingsServices";
import { FirstDayOfTheWeek } from "../../types/time.types";
import SettingsOptionSelector from "./SettingsOptionSelector";
import SettingsOptionView from "./SettingsOptionView";

export default function WeekDaySetting() {
  const [dayPreference, setDayPreference] =
    useState<FirstDayOfTheWeek>("system");

  useEffect(() => {
    loadFirstDayPreference(setDayPreference);
  }, []);

  return (
    <SettingsOptionView text={"First Day of the Week"}>
      <SettingsOptionSelector
        array={firstDaySetting}
        selectFunction={(option: FirstDayOfTheWeek) =>
          handleFirstDayOfTheWeek(option, dayPreference, setDayPreference)
        }
        optionComparison={dayPreference}
      />
    </SettingsOptionView>
  );
}
