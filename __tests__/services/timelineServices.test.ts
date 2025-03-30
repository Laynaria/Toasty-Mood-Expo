import { months } from "@/services/time";
import { filteredArray } from "@/services/timelineServices";
import { Toast } from "@/types/toasts.types";

describe("> timelineServices.ts test suite", () => {
  describe("> filteredArray function test suite", () => {
    const mockedToastArray: Toast[] = [
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
        date: new Date("April 28, 2024").toDateString(),
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
        date: new Date("April 29, 2024").toDateString(),
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
        date: new Date("April 12, 2025").toDateString(),
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

    test("Checks if function returns only first Toast if filterting with December 2023 as arguments", () => {
      expect(
        filteredArray(mockedToastArray, months, "December", 2023)
      ).toStrictEqual([mockedToastArray[0]]);
    });

    test("Checks if function returns an array of Toast 1,2,3 if filterting with April 2024 as arguments", () => {
      expect(
        filteredArray(mockedToastArray, months, "April", 2024)
      ).toStrictEqual([
        mockedToastArray[1],
        mockedToastArray[2],
        mockedToastArray[3],
      ]);
    });

    test("Checks if function returns an empty array with December 2024 as arguments", () => {
      expect(
        filteredArray(mockedToastArray, months, "December", 2024)
      ).toStrictEqual([]);
    });
  });
});
