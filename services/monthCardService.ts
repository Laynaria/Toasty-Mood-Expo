import { Dispatch } from "react";

export const handleMonthSelect = (
  timeline: boolean,
  setIsSelectingMonth: Dispatch<boolean> | null
) => {
  if (!timeline) {
    return;
  }

  setIsSelectingMonth(true);
};
