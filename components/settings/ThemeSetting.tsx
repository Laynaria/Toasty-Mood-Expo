import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import {
  handleThemeSetting,
  themeSetting,
} from "../../services/settingsServices";
import { ThemePreference } from "../../types/theme.types";
import SettingsOptionSelector from "./SettingsOptionSelector";
import SettingsOptionView from "./SettingsOptionView";

export default function ThemeSetting() {
  const { themePreference, setThemePreference } = useContext(ThemeColorContext);

  return (
    <SettingsOptionView text={"Theme Setting"}>
      <SettingsOptionSelector
        array={themeSetting}
        selectFunction={(option: ThemePreference) =>
          handleThemeSetting(option, themePreference, setThemePreference)
        }
        optionComparison={themePreference}
      />
    </SettingsOptionView>
  );
}
