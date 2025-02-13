import { ThemePreference, ThemeType } from "../types/theme.types";
import { storeThemeColor, storeThemePreference } from "./storage";

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
