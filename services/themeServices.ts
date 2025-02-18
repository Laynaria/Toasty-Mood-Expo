import { Dispatch } from "react";
import { storeThemeToast } from "./storage";

export const themeNamesArray: String[] = ["Original", "Alternative"];

export const handleToastsThemeChange = (
  selectedThemeToast: number,
  setSelectedThemeToast: Dispatch<number>,
  index: number
): void => {
  if (selectedThemeToast !== index) {
    setSelectedThemeToast(index);
    storeThemeToast(index);
  }
};
