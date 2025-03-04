import { act } from "react";
import { fireEvent, render } from "@testing-library/react-native";

import ClearAllData from "@/components/settings/ClearAllData";

describe("<ClearAllData />", () => {
  test("Clear All Data Text correctly showing when state is false", () => {
    const { getByText, queryByText } = render(<ClearAllData />);

    getByText("Delete Toasts");
    expect(queryByText("Are you sure?")).not.toBeOnTheScreen();
  });

  test("Clear All Data Text correctly showing when state is true", () => {
    const { getByText } = render(<ClearAllData />);

    const button = getByText("Delete Toasts");

    act(() => fireEvent.press(button));

    getByText("Delete Toasts");
    getByText("Are you sure?");
    getByText("Yes");
    getByText("No");
  });
});
