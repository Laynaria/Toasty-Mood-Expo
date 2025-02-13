import React, { createContext, useState, useMemo, useEffect } from "react";
import { useColorScheme } from "react-native";
import { getThemeColor, getThemePreference } from "../services/storage";
import { ThemePreference, ThemeType } from "../types/theme.types";

const ThemeColorContext = createContext({
  selectedTheme: { primary: "", secondary: "", darkBackground: "" },
  setSelectedTheme: (selectedTheme: ThemeType) => {},
  themePreference: "",
  setThemePreference: (themePreference: ThemePreference) => {},
  colorScheme: (): ThemePreference => "system",
});

const ThemeColorContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>({
    primary: "#E3A062",
    secondary: "#6A3C11",
    darkBackground: "#221603",
  });
  const [themePreference, setThemePreference] =
    useState<ThemePreference>("system");

  const phoneScheme = useColorScheme();

  const colorScheme = () => {
    return themePreference === "system" ? phoneScheme : themePreference;
  };

  useEffect(() => {
    const getTheme = async () => {
      const response: ThemeType = await getThemeColor();
      if (response) {
        setSelectedTheme(response);
      }
    };

    const getPreference = async () => {
      const response: ThemePreference = await getThemePreference();

      if (response) {
        setThemePreference(response);
      }
    };

    getTheme();
    getPreference();
  }, []);

  const userMemo = useMemo(
    () => ({
      selectedTheme,
      setSelectedTheme,
      themePreference,
      setThemePreference,
      colorScheme,
    }),
    [
      selectedTheme,
      setSelectedTheme,
      themePreference,
      setThemePreference,
      colorScheme,
    ]
  );

  return (
    <ThemeColorContext.Provider value={userMemo}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export { ThemeColorContext, ThemeColorContextProvider };
