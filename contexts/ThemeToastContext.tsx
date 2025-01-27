import React, { createContext, useState, useMemo, useEffect } from "react";
import { getThemeToast } from "../services/storage";

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
