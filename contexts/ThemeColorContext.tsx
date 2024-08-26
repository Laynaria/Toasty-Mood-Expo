import React, { createContext, useState, useMemo, useEffect } from "react";

const ThemeColorContext = createContext({
  selectedTheme: "",
  setSelectedTheme: (selectedTheme: string) => {},
});

const ThemeColorContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [selectedTheme, setSelectedTheme] = useState<string>("#E3A062");

  useEffect(() => {}, [selectedTheme]);

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
