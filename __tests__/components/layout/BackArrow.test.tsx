import { useGlobalSearchParams } from "expo-router";
import { render } from "@testing-library/react-native";
import BackArrow from "@/components/layout/BackArrow";

jest.mock("expo-router", () => ({
  useGlobalSearchParams: jest.fn(),
}));

(useGlobalSearchParams as jest.Mock).mockReturnValue({
  previousPage: "todo",
  previousOffset: 5,
  index: 30,
});

describe("<BackArrow />", () => {
  test("Check if BackArrow component contain the backarrow picture", () => {
    const { getByLabelText } = render(<BackArrow />);

    getByLabelText("Previous page icon");
  });
});
