import React, { createContext, useState, useMemo, useEffect } from "react";
import { getThemeToast } from "../services/storage";

const ThemeToastContext = createContext({
  selectedThemeToast: 0,
  setSelectedThemeToast: (selectedThemeToast: number) => {},
});

const ThemeToastContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [selectedThemeToast, setSelectedThemeToast] = useState<number>(0);

  useEffect(() => {
    const getTheme = async () => {
      const response: number = await getThemeToast();
      if (response) {
        setSelectedThemeToast(response);
      }
    };

    getTheme();
  }, []);

  const userMemo = useMemo(
    () => ({
      selectedThemeToast,
      setSelectedThemeToast,
    }),
    [selectedThemeToast, setSelectedThemeToast]
  );

  return (
    <ThemeToastContext.Provider value={userMemo}>
      {children}
    </ThemeToastContext.Provider>
  );
};

export { ThemeToastContext, ThemeToastContextProvider };
