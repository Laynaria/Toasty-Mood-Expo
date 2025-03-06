import { useGlobalSearchParams } from "expo-router";
import { fireEvent, render } from "@testing-library/react-native";
import BackArrow from "@/components/layout/BackArrow";
import { act } from "react";
import { handlePreviousPageNavigation } from "@/services/layoutService";

jest.mock("expo-router", () => ({
  useGlobalSearchParams: jest.fn(),
}));

(useGlobalSearchParams as jest.Mock).mockReturnValue({
  previousPage: "todo",
  previousOffset: 5,
  index: 30,
});

jest.mock("@/services/layoutService", () => ({
  handlePreviousPageNavigation: jest.fn(),
}));

describe("<BackArrow />", () => {
  test("Check if BackArrow component contain the backarrow picture", () => {
    const { getByLabelText } = render(<BackArrow />);

    getByLabelText("Previous page icon");
  });

  test("Check if pressing button works and launch a mocked function 1 time", () => {
    const { getByLabelText } = render(<BackArrow />);

    const button = getByLabelText("Previous page icon");
    act(() => fireEvent.press(button));

    expect(handlePreviousPageNavigation).toHaveBeenCalledTimes(1);
  });
});
