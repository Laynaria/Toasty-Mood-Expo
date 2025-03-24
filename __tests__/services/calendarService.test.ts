import { checkDate } from "@/services/calendarServices";

describe("> calendarService.ts test suite", () => {
  // getToastByDay test suite

  describe("> checkDate function test suite", () => {
    test("Checks that checkDate function returns 2024-04 with 2024 and April as arguments", () => {
      expect(checkDate("2024", "April")).toBe("2024-04");
    });

    test("Checks that checkDate function doesn't returns 2024-05 with 2024 and April as arguments", () => {
      expect(checkDate("2024", "April")).not.toBe("2024-05");
    });

    test("Checks that checkDate function returns 2022-10 with 2022 and October as arguments", () => {
      expect(checkDate("2022", "October")).toBe("2022-10");
    });

    test("Checks that checkDate function doesn't returns 2023-11 with 2022 and October as arguments", () => {
      expect(checkDate("2022", "October")).not.toBe("2023-11");
    });
  });
});
