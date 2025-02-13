import { router } from "expo-router";
import { Toast } from "../types/toasts.type";

export const handleCalendarToastRedirect = (
  date: Date,
  index: number,
  Offset: number
) => {
  if (date.getTime() <= new Date().getTime()) {
    router.push({
      pathname: `/new-toast/${date}`,
      params: { index, previousOffset: Offset },
    });
  }
};

export const getToastByDay = (
  day: number,
  toasts: Toast[],
  months: string[],
  year: string,
  month: string
) => {
  if (toasts) {
    return toasts.filter(
      (toast) =>
        new Date(toast.date).toLocaleDateString() ===
        new Date(
          `${year}-${months.indexOf(month) + 1}-${day}T03:22:00`
        ).toLocaleDateString()
    )[0];
  }
};
