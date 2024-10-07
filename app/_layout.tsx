import { ThemeColorContextProvider } from "../contexts/ThemeColorContext";
import LayoutView from "../components/LayoutView";

export default function RootLayout() {
  return (
    <ThemeColorContextProvider>
      <LayoutView />
    </ThemeColorContextProvider>
  );
}
