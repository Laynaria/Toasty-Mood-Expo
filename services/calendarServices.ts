import { router } from "expo-router";
import { Toast } from "../types/toasts.types";
import { months, years } from "./time";
import { DataCalendar } from "../types/time.types";

export const handleCalendarToastRedirect = (
  date: Date,
  index: number,
  Offset: number
): void => {
  if (date.getTime() <= new Date().getTime()) {
    router.push({
      pathname: "/new-toast/[date]",
      params: { date: date.toString(), index, previousOffset: Offset },
    });
  }
};

export const getToastByDay = (
  day: number,
  toasts: Toast[] | undefined,
  months: string[],
  year: string,
  month: string
): Toast | null => {
  if (toasts) {
    return toasts.filter(
      (toast) =>
        new Date(toast.date).toLocaleDateString() ===
        new Date(
          `${year}-${months.indexOf(month) + 1}-${day}T03:22:00`
        ).toLocaleDateString()
    )[0];
  }

  return null;
};

export const checkDate = (year: string, month: string): string => {
  return `${year}-${
    months.indexOf(month) >= 9
      ? months.indexOf(month) + 1
      : `0${months.indexOf(month) + 1}`
  }`;
};

export const dataCalendar: DataCalendar[][] = years(2022).map(
  (year): DataCalendar[] =>
    months
      .filter(
        (month) =>
          months.indexOf(month) <= new Date().getMonth() ||
          year !== new Date().getFullYear()
      )
      .map((month) => ({
        month,
        year: year,
      }))
);
