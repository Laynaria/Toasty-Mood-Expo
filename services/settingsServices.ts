import { Dispatch } from "react";
import {
  deleteToasts,
  storeFirstDayPreference,
  storeThemeColor,
  storeThemeOverride,
  storeThemePreference,
} from "./storage";
import { ThemePreference, ThemeType } from "../types/theme.types";
import { FirstDayOfTheWeek } from "../types/weekday.types";

export const themeColors: ThemeType[] = [
  { primary: "#E3A062", secondary: "#6A3C11", darkBackground: "#221603" },
  { primary: "#8DAEDF", secondary: "#1E648B", darkBackground: "#030522" },
  { primary: "#E47B7B", secondary: "#89122F", darkBackground: "#220304" },
];

export const handleThemeColorChange = (
  theme: ThemeType,
  selectedTheme: ThemeType,
  setSelectedTheme: Dispatch<ThemeType>
): void => {
  if (theme !== selectedTheme) {
    setSelectedTheme(themeColors[themeColors.indexOf(theme)]);
    storeThemeColor(theme);
  }
};

export const themeSetting: ThemePreference[] = ["light", "dark", "system"];

export const handleThemeSetting = (
  theme: ThemePreference,
  themePreference: ThemePreference | string,
  setThemePreference: Dispatch<ThemePreference>
): void => {
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
  dayPreference: FirstDayOfTheWeek,
  setDayPreference: Dispatch<FirstDayOfTheWeek>
): void => {
  if (day !== dayPreference) {
    setDayPreference(day);
    storeFirstDayPreference(day);
  }
};

export const themeOverride: boolean[] = [true, false];

export const handleThemeOverride = (
  option: boolean,
  selectOverride: boolean,
  setSelectOverride: Dispatch<boolean>
): void => {
  if (option !== selectOverride) {
    setSelectOverride(option);
    storeThemeOverride(option);
  }
};

export const handleClearAllData = async (
  setIsDeleteModal: Dispatch<boolean>
): Promise<void> => {
  await deleteToasts();
  setIsDeleteModal(false);
};
