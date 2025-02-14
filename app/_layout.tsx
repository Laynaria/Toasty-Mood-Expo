import { ThemeColorContextProvider } from "../contexts/ThemeColorContext";
import { ThemeToastContextProvider } from "../contexts/ThemeToastContext";
import LayoutView from "../components/layout/LayoutView";

export default function RootLayout() {
  return (
    <ThemeColorContextProvider>
      <ThemeToastContextProvider>
        <LayoutView />
      </ThemeToastContextProvider>
    </ThemeColorContextProvider>
  );
}
