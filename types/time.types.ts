import { Toast } from "./toasts.types";

export type FirstDayOfTheWeek = "monday" | "sunday" | "system";

export type DataCalendar = { month: string; year: number };

export type CalendarDayType = {
  day: number;
  toast: Toast | null;
};
