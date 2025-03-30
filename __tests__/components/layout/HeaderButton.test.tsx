import { ImageSourcePropType } from "react-native";
import { render } from "@testing-library/react-native";
import HeaderButton from "@/components/layout/HeaderButton";

const themeIcon: ImageSourcePropType = require("@/assets/icons/theme.png");

describe("<HeaderButton />", () => {
  test("Check if HeaderButton component contains correct Label based on provided link", () => {
    const { getByLabelText, queryByLabelText } = render(
      <HeaderButton link="/theme" icon={themeIcon} />
    );

    getByLabelText("theme page icon");
    expect(queryByLabelText("todo page icon")).not.toBeOnTheScreen();
  });
});
