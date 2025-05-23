import { render } from "@testing-library/react-native";
import Header from "@/components/layout/Header";

describe("<Header />", () => {
  test("Check if Header component contain todo and theme page icons", () => {
    const { getByLabelText } = render(<Header />);

    getByLabelText("todo page icon");
    getByLabelText("theme page icon");
  });
});
