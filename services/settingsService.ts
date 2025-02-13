import { ThemePreference, ThemeType } from "../types/theme.types";
import { FirstDayOfTheWeek } from "../types/weekday.types";
import {
  storeFirstDayPreference,
  storeThemeColor,
  storeThemeOverride,
  storeThemePreference,
} from "./storage";

export const themeColors: ThemeType[] = [
  { primary: "#E3A062", secondary: "#6A3C11", darkBackground: "#221603" },
  { primary: "#8DAEDF", secondary: "#1E648B", darkBackground: "#030522" },
  { primary: "#E47B7B", secondary: "#89122F", darkBackground: "#220304" },
];

export const handleThemeColorChange = (
  theme: ThemeType,
  selectedTheme,
  setSelectedTheme
) => {
  if (theme !== selectedTheme) {
    setSelectedTheme(themeColors[themeColors.indexOf(theme)]);
    storeThemeColor(theme);
  }
};

export const themeSetting: ThemePreference[] = ["light", "dark", "system"];

export const handleThemeSetting = (
  theme: ThemePreference,
  themePreference,
  setThemePreference
) => {
  if (theme !== themePreference) {
    setThemePreference(theme);
    storeThemePreference(theme);
  }
};

export const firstDaySetting: FirstDayOfTheWeek[] = [
  "monday",
  "sunday",
  "system",
];

export const handleFirstDayOfTheWeek = (
  day: FirstDayOfTheWeek,
  dayPreference,
  setDayPreference
) => {
  if (day !== dayPreference) {
    setDayPreference(day);
    storeFirstDayPreference(day);
  }
};

export const themeOverride: boolean[] = [true, false];

export const handleThemeOverride = (
  option: boolean,
  selectOverride,
  setSelectOverride
) => {
  if (option !== selectOverride) {
    setSelectOverride(option);
    storeThemeOverride(option);
  }
};
