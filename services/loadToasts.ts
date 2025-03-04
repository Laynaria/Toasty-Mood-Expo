import { Dispatch } from "react";
import { getFirstDayPreference, getToasts } from "./storage";
import { FirstDayOfTheWeek } from "../types/time.types";
import { Toast } from "../types/toasts.types";

export const loadToasts = async (
  setToasts: Dispatch<Toast[] | null>,
  setWeekPreference?: Dispatch<FirstDayOfTheWeek | null>
): Promise<void> => {
  if (setWeekPreference) {
    setWeekPreference(await getFirstDayPreference());
  }

  setToasts(await getToasts());
};
