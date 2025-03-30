import { useGlobalSearchParams, usePathname, Slot } from "expo-router";
import { render } from "@testing-library/react-native";
import LayoutView from "@/components/layout/LayoutView";
import { Text } from "react-native";

jest.mock("expo-router", () => ({
  useGlobalSearchParams: jest.fn(),
  usePathname: jest.fn(),
  Slot: jest.fn(),
}));

(useGlobalSearchParams as jest.Mock).mockReturnValue({
  previousPage: "todo",
  previousOffset: 5,
  index: 30,
});

(usePathname as jest.Mock).mockReturnValue("/new-toast");
(Slot as jest.Mock).mockReturnValue(<Text>slot</Text>);

describe("<LayoutView />", () => {
  test("Check if LayoutView component render BackArrowComponent and a mock of Slot", () => {
    const { getByText, getByLabelText } = render(<LayoutView />);

    getByLabelText("Previous page icon");
    getByText("slot");
  });
});
