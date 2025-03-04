import React, { createContext, useState, useMemo, useEffect } from "react";
import { getThemeOverride, getThemeToast } from "../services/storage";

const ThemeToastContext = createContext({
  selectedThemeToast: 0,
  setSelectedThemeToast: (selectedThemeToast: number) => {},
  selectOverride: false,
  setSelectOverride: (selectOverride: boolean) => {},
});

const ThemeToastContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [selectedThemeToast, setSelectedThemeToast] = useState<number>(0);
  const [selectOverride, setSelectOverride] = useState<boolean>(false);

  useEffect(() => {
    const getTheme = async (): Promise<void> => {
      const response: number | null = await getThemeToast();
      if (response) {
        setSelectedThemeToast(response);
      }
    };

    const getOverride = async (): Promise<void> => {
      const response: boolean | null = await getThemeOverride();
      if (response) {
        setSelectOverride(response);
      }
    };

    getTheme();
    getOverride();
  }, []);

  const userMemo = useMemo(
    () => ({
      selectedThemeToast,
      setSelectedThemeToast,
      selectOverride,
      setSelectOverride,
    }),
    [
      selectedThemeToast,
      setSelectedThemeToast,
      selectOverride,
      setSelectOverride,
    ]
  );

  return (
    <ThemeToastContext.Provider value={userMemo}>
      {children}
    </ThemeToastContext.Provider>
  );
};

export { ThemeToastContext, ThemeToastContextProvider };
