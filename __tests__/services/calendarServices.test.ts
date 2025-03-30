import {
  checkDate,
  dataCalendar,
  getToastByDay,
} from "@/services/calendarServices";
import { months } from "@/services/time";
import { Toast } from "@/types/toasts.types";

describe("> calendarService.ts test suite", () => {
  describe("> getToastByDay function test suite", () => {
    const MockedToastArray: Toast[] = [
      {
        date: new Date("December 17, 2023").toDateString(),
        isBitey: true,
        isJamDay: true,
        moodArray: 3,
        weather: 1,
        temperature: 5,
        note: "This is a mocked Test",
        photo: "",
        selectedToast: 4,
      },
      {
        date: new Date("April 24, 2024").toDateString(),
        isBitey: true,
        isJamDay: true,
        moodArray: 3,
        weather: 1,
        temperature: 5,
        note: "This is a mocked Test",
        photo: "",
        selectedToast: 4,
      },
      {
        date: new Date().toDateString(),
        isBitey: true,
        isJamDay: true,
        moodArray: 3,
        weather: 1,
        temperature: 5,
        note: "This is a mocked Test",
        photo: "",
        selectedToast: 4,
      },
    ];

    test("Checks that function properly returns first toast of the array with proper arguments", () => {
      expect(
        getToastByDay(17, MockedToastArray, months, "2023", "December")
      ).toStrictEqual(MockedToastArray[0]);
    });

    test("Checks that function properly returns second toast of the array with proper arguments", () => {
      expect(
        getToastByDay(24, MockedToastArray, months, "2024", "April")
      ).toStrictEqual(MockedToastArray[1]);
    });

    test("Checks that function properly returns last toast of the array with proper arguments", () => {
      const today = new Date();

      expect(
        getToastByDay(
          today.getDate(),
          MockedToastArray,
          months,
          `${today.getFullYear()}`,
          `${months[today.getMonth()]}`
        )
      ).toStrictEqual(MockedToastArray[2]);
    });

    test("Checks that function properly doesn't returns a toast with wrong arguments", () => {
      expect(getToastByDay(25, MockedToastArray, months, "2024", "April")).toBe(
        undefined
      );
    });

    test("Checks that function properly returns null if toasts array is undefined", () => {
      expect(getToastByDay(25, undefined, months, "2024", "April")).toBe(null);
    });
  });

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

  describe("> dataCalendar function test suite", () => {
    test("Checks that dataCalendar array length is equal every year from 2022 to now", () => {
      expect(dataCalendar.length).toBe(new Date().getFullYear() - 2022 + 1);
    });

    test("Checks that first year of the array has a proper length of 12", () => {
      expect(dataCalendar[0].length).toBe(12);
    });

    test("Checks that current year in the array has a proper length based on current month", () => {
      const thisYear = dataCalendar[dataCalendar.length - 1];

      expect(thisYear.length).toBe(new Date().getMonth() + 1);
    });

    test("Checks that last object in the array properly has current month and year as values", () => {
      const thisYear = dataCalendar[dataCalendar.length - 1];
      const thisMonth = thisYear[thisYear.length - 1];
      const today = new Date();

      expect(thisMonth).toStrictEqual({
        month: months[today.getMonth()],
        year: today.getFullYear(),
      });
    });
  });
});
