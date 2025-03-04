import { Calendar, getCalendars } from "expo-localization";
import { FirstDayOfTheWeek } from "../types/time.types";

export const weekDays = (
  weekPreference: FirstDayOfTheWeek | null
): string[] => {
  const [{ firstWeekday }]: Calendar[] = getCalendars();
  const daysName: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysNameBis: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  if (weekPreference === "system" || !weekPreference) {
    return firstWeekday === 2 ? daysName : daysNameBis;
  }

  return weekPreference === "monday" ? daysName : daysNameBis;
};

export const days: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const daySuffix: string[] = ["st", "nd", "rd"];

export const getDaysName = (
  year: string,
  month: string,
  day: number
): string => {
  return new Date(parseInt(year), months.indexOf(month), day)
    .toString()
    .split(" ")[0];
};

export const daysInMonth = (year: string, month: string): number =>
  new Date(parseInt(year), months.indexOf(month) + 1, 0).getDate();

export const years = (year: number): number[] => {
  const currentYear: number = new Date().getFullYear();
  const yearsArray: number[] = [];

  for (let i = year; i <= currentYear; i++) {
    yearsArray.push(i);
  }

  return yearsArray;
};

export const isOrWas = (date: Date): string => {
  return date.toLocaleDateString() === new Date().toLocaleDateString()
    ? "Is"
    : "Was";
};
