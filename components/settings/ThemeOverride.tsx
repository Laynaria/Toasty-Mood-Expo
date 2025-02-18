import { useContext } from "react";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import {
  handleThemeOverride,
  themeOverride,
} from "../../services/settingsServices";
import SettingsOptionSelector from "./SettingsOptionSelector";
import SettingsOptionView from "./SettingsOptionView";

export default function ThemeOverride() {
  const { selectOverride, setSelectOverride } = useContext(ThemeToastContext);

  return (
    <SettingsOptionView
      text={"Override toasts icons in calendar and timeline?"}
    >
      <SettingsOptionSelector
        array={themeOverride}
        selectFunction={(option: boolean) =>
          handleThemeOverride(option, selectOverride, setSelectOverride)
        }
        optionComparison={selectOverride}
      />
    </SettingsOptionView>
  );
}
