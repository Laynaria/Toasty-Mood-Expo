import { Dispatch } from "react";
import { Toast } from "../types/toasts.types";

export const filteredArray = (
  array: Toast[],
  months: string[],
  selectedMonth: string,
  selectedYear: number
): Toast[] =>
  array
    .sort(
      (a, b) =>
        new Date(a.date.split("T")[0]).getTime() -
        new Date(b.date.split("T")[0]).getTime()
    )
    .filter(
      (toast) =>
        new Date(toast.date).getMonth() === months.indexOf(selectedMonth) &&
        new Date(toast.date).getFullYear() === selectedYear
    );

export const updateSelectedMonth = (
  setSelectedMonth: Dispatch<string>,
  newMonth: string,
  setSelectedYear: Dispatch<number>,
  newYear: number,
  closeModal: () => void
): void => {
  setSelectedMonth(newMonth);
  setSelectedYear(newYear);
  closeModal();
};
