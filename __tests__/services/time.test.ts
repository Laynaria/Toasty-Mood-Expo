import { daysInMonth, getDaysName } from "../../services/time";

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
  });
});
