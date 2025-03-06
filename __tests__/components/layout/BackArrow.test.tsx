import BackArrow from "@/components/layout/BackArrow";
import { render } from "@testing-library/react-native";
import { useGlobalSearchParams } from "expo-router";

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
