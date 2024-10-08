import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { ThemePreference, ThemeType } from "../types/theme.types";
import { getThemeColor } from "../services/storage";
import { useColorScheme } from "react-native";

const ThemeColorContext = createContext({
  selectedTheme: { primary: "", secondary: "", darkBackground: "" },
  setSelectedTheme: (selectedTheme: ThemeType) => {},
  colorScheme: (): ThemePreference => "automatic",
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
    useState<ThemePreference>("automatic");

  const colorScheme = useCallback(() => {
    return themePreference === "automatic" ? useColorScheme() : themePreference;
  }, [themePreference]);

  useEffect(() => {
    const getTheme = async () => {
      const response: ThemeType = await getThemeColor();
      if (response) {
        setSelectedTheme(response);
      }
    };

    getTheme();
  }, []);

  const userMemo = useMemo(
    () => ({
      selectedTheme,
      setSelectedTheme,
      colorScheme,
    }),
    [selectedTheme, setSelectedTheme, colorScheme]
  );

  return (
    <ThemeColorContext.Provider value={userMemo}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export { ThemeColorContext, ThemeColorContextProvider };
