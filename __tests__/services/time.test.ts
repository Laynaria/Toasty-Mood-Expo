import { daysInMonth, getDaysName, years } from "../../services/time";

describe("time.ts test suite", () => {
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
});
