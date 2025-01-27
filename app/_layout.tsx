import { ThemeColorContextProvider } from "../contexts/ThemeColorContext";
import LayoutView from "../components/LayoutView";
import { ThemeToastContextProvider } from "../contexts/ThemeToastContext";

export default function RootLayout() {
  return (
    <ThemeColorContextProvider>
      <ThemeToastContextProvider>
        <LayoutView />
      </ThemeToastContextProvider>
    </ThemeColorContextProvider>
  );
}
