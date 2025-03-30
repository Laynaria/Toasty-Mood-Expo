import { Dispatch } from "react";

export const handleMonthSelect = (
  timeline: boolean,
  setIsSelectingMonth: Dispatch<boolean> | null
): void => {
  if (!timeline) {
    return;
  }

  if (setIsSelectingMonth) {
    setIsSelectingMonth(true);
  }
};
