import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeType } from "../types/theme.types";
import { getThemeColor } from "../services/storage";

const ThemeColorContext = createContext({
  selectedTheme: { primary: "", secondary: "" },
  setSelectedTheme: (selectedTheme: ThemeType) => {},
});

const ThemeColorContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>({
    primary: "#E3A062",
    secondary: "#6A3C11",
  });

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
    }),
    [selectedTheme, setSelectedTheme]
  );

  return (
    <ThemeColorContext.Provider value={userMemo}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export { ThemeColorContext, ThemeColorContextProvider };
