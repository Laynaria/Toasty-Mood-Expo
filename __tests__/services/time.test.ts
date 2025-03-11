import {
  daysInMonth,
  getDaysName,
  isOrWas,
  weekDays,
  years,
} from "../../services/time";

import { getCalendars } from "expo-localization";

describe("time.ts test suite", () => {
  describe("weekDays function test suite", () => {
    jest.mock("expo-localization", () => ({
      getCalendars: jest.fn(),
    }));

    (getCalendars as jest.Mock).mockReturnValue([{ firstWeekday: 2 }]);

    test("Checks that weekDays function properly return an array starting with Mon with monday as argument", () => {
      expect(weekDays("monday")).toStrictEqual([
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ]);
    });

    test("Checks that weekDays function properly return an array starting with Sun with sunday as argument", () => {
      expect(weekDays("sunday")).toStrictEqual([
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ]);
    });

    test("Checks that weekDays function properly return an array starting with Mon with system as argument, and mocked system equaling to monday", () => {
      expect(weekDays("system")).toStrictEqual([
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ]);
    });

    test("Checks that weekDays function properly return an array starting with Sun with system as argument, and mocked system equaling to sunday", () => {
      (getCalendars as jest.Mock).mockReturnValue([{ firstWeekday: 1 }]);

      expect(weekDays("system")).toStrictEqual([
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ]);
    });
  });

  describe("getDaysName function test suite", () => {
    test("Checks that getDayName properly return Thu for 16 May 2024", () => {
      expect(getDaysName("2024", "May", 16)).toBe("Thu");
    });

    test("Checks that getDayName properly return Mon for 9 April 2018", () => {
      expect(getDaysName("2018", "April", 9)).toBe("Mon");
    });

    test("Checks that getDayName properly doesn't return Mon for 9 April 2025", () => {
      expect(getDaysName("2025", "April", 9)).not.toBe("Mon");
    });
  });

  describe("daysInMonth function test suite", () => {
    test("Checks that daysInMonth return 31 for May 2024", () => {
      expect(daysInMonth("2024", "May")).toBe(31);
    });

    test("Checks that daysInMonth return 29 for February 2024", () => {
      expect(daysInMonth("2024", "February")).toBe(29);
    });

    test("Checks that daysInMonth return 29 for February 2025", () => {
      expect(daysInMonth("2025", "February")).toBe(28);
    });

    test("Checks that daysInMonth doesn't return 28 for February 2026", () => {
      expect(daysInMonth("2026", "February")).not.toBe(29);
    });
  });

  describe("years function test suite", () => {
    test("Checks that years function return [2024,2025] with 2024 as argument", () => {
      expect(years(2024)).toStrictEqual([2024, 2025]);
    });

    test("Checks that years function return [2025] with 2025 as argument", () => {
      expect(years(2025)).toStrictEqual([2025]);
    });

    test("Checks that years function return [2024,2025] with 2024 as argument", () => {
      expect(years(2024)).toStrictEqual([2024, 2025]);
    });

    test("Checks that years function return an array from 2016 to 2025 with 2016 as argument", () => {
      expect(years(2016)).toStrictEqual([
        2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
      ]);
    });

    test("Checks that years function doesn't return an array from 2018 to 2025 with 2019 as argument", () => {
      expect(years(2019)).not.toStrictEqual([
        2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
      ]);
    });
  });

  describe("isOrWas function test suite", () => {
    test("Checks that isOrWas function returns Is with today's date as argument", () => {
      expect(isOrWas(new Date())).toBe("Is");
    });

    test("Checks that isOrWas function returns Was with 17/12/2015 date as argument", () => {
      expect(isOrWas(new Date("December 17, 2015"))).toBe("Was");
    });

    test("Checks that isOrWas function returns Was with 19/10/2024 date as argument", () => {
      expect(isOrWas(new Date("October 19, 2024"))).toBe("Was");
    });

    test("Checks that isOrWas function doesn't returns Is with yesterday date as argument", () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

      expect(isOrWas(new Date(yesterday))).not.toBe("Is");
    });
  });
});
