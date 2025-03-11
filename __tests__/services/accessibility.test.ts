import { moodAccessibility } from "@/services/accessibility";

describe("accessibility.ts test suite", () => {
  test("Check if index 0 equals to Very Happy", () => {
    expect(moodAccessibility[0]).toBe("Very Happy");
  });

  test("Check if index 0 doesn't equal to Happy", () => {
    expect(moodAccessibility[0]).not.toBe("Happy");
  });

  test("Check if index 1 equals to Happy", () => {
    expect(moodAccessibility[1]).toBe("Happy");
  });

  test("Check if index 1 doesn't equal to Neutral", () => {
    expect(moodAccessibility[1]).not.toBe("Neutral");
  });

  test("Check if index 2 equals to Neutral", () => {
    expect(moodAccessibility[2]).toBe("Neutral");
  });

  test("Check if index 2 doesn't equal to Very Happy", () => {
    expect(moodAccessibility[2]).not.toBe("Very Happy");
  });

  test("Check if index 3 equals to Unhappy", () => {
    expect(moodAccessibility[3]).toBe("Unhappy");
  });

  test("Check if index 3 doesn't equal to Very Unhappy", () => {
    expect(moodAccessibility[3]).not.toBe("Very Unhappy");
  });

  test("Check if index 4 equals to Very Unhappy", () => {
    expect(moodAccessibility[4]).toBe("Very Unhappy");
  });

  test("Check if index 4 doesn't equal to Unhappy", () => {
    expect(moodAccessibility[4]).not.toBe("Unhappy");
  });
});
