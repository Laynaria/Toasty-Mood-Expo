import { settingsOptionText } from "@/services/settingsServices";

describe("> settingsServices.ts test suite", () => {
  describe("> settingsOptionText function test suite", () => {
    test("Checks that settingsOptionText properly return a string passed as argument", () => {
      expect(settingsOptionText("#FFFFFF")).toBe("#FFFFFF");
    });

    test("Checks that settingsOptionText properly doesn't return Yes if a string was passed as argument", () => {
      expect(settingsOptionText("#FFFFFF")).not.toBe("Yes");
    });

    test("Checks that settingsOptionText properly doesn't return No if a string was passed as argument", () => {
      expect(settingsOptionText("#FFFFFF")).not.toBe("No");
    });

    test("Checks that settingsOptionText properly return Yes if true was passed as argument", () => {
      expect(settingsOptionText(true)).toBe("Yes");
    });

    test("Checks that settingsOptionText properly doesn't return No if true was passed as argument", () => {
      expect(settingsOptionText(true)).not.toBe("No");
    });

    test("Checks that settingsOptionText properly return Yes if false was passed as argument", () => {
      expect(settingsOptionText(false)).toBe("No");
    });

    test("Checks that settingsOptionText properly doesn't return Yes if false was passed as argument", () => {
      expect(settingsOptionText(false)).not.toBe("Yes");
    });

    test("Checks that settingsOption text always returns a string", () => {
      expect(typeof settingsOptionText("#FFFFFF")).toBe("string");
      expect(typeof settingsOptionText(true)).toBe("string");
      expect(typeof settingsOptionText(false)).toBe("string");
    });
  });
});
