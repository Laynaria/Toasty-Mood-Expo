import React, { createContext, useState, useMemo, useEffect } from "react";

const ThemeToastContext = createContext({
  themeToast: 0,
  setThemeToast: (themeToast: number) => {},
});

const ThemeToastContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [themeToast, setThemeToast] = useState<number>(1);

  useEffect(() => {
    // get fromstorage
  }, []);

  const userMemo = useMemo(
    () => ({
      themeToast,
      setThemeToast,
    }),
    [themeToast, setThemeToast]
  );

  return (
    <ThemeToastContext.Provider value={userMemo}>
      {children}
    </ThemeToastContext.Provider>
  );
};

export { ThemeToastContext, ThemeToastContextProvider };
