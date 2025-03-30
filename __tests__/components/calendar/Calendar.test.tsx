import { render } from "@testing-library/react-native";
import { getCalendars } from "expo-localization";
import { weekDays } from "@/services/time";
import Calendar from "@/components/calendar/Calendar";

jest.mock("expo-localization", () => ({
  getCalendars: jest.fn(),
}));

(getCalendars as jest.Mock).mockReturnValue([{ firstWeekday: 2 }]);

describe("<Calendar />", () => {
  test("Check if Calendar component properly maps days with May 2018 parameter and also contain the right month indicator", () => {
    const { getByText } = render(
      <Calendar
        selectedMonth="May"
        selectedYear="2018"
        toasts={undefined}
        weekDays={() => weekDays("monday")}
        index={18}
        currentOffset={0}
      />
    );
    getByText("May 2018");
    getByText("Mon");
    getByText("Tue");
    getByText("Wed");
    getByText("Thu");
    getByText("Fri");
    getByText("Sat");
    getByText("Sun");

    getByText("1");
    getByText("2");
    getByText("3");
    getByText("4");
    getByText("5");
    getByText("6");
    getByText("7");
    getByText("8");
    getByText("9");
    getByText("10");
    getByText("11");
    getByText("12");
    getByText("13");
    getByText("14");
    getByText("15");
    getByText("16");
    getByText("17");
    getByText("18");
    getByText("19");
    getByText("20");
    getByText("21");
    getByText("22");
    getByText("23");
    getByText("24");
    getByText("25");
    getByText("26");
    getByText("27");
    getByText("28");
    getByText("29");
    getByText("30");
    getByText("31");
  });

  test("Check if Calendar component properly maps days with February 2018 parameter and also contain the right month indicator", () => {
    const { getByText, queryByText } = render(
      <Calendar
        selectedMonth="February"
        selectedYear="2018"
        toasts={undefined}
        weekDays={() => weekDays("monday")}
        index={18}
        currentOffset={0}
      />
    );
    getByText("February 2018");
    getByText("Mon");
    getByText("Tue");
    getByText("Wed");
    getByText("Thu");
    getByText("Fri");
    getByText("Sat");
    getByText("Sun");

    getByText("1");
    getByText("2");
    getByText("3");
    getByText("4");
    getByText("5");
    getByText("6");
    getByText("7");
    getByText("8");
    getByText("9");
    getByText("10");
    getByText("11");
    getByText("12");
    getByText("13");
    getByText("14");
    getByText("15");
    getByText("16");
    getByText("17");
    getByText("18");
    getByText("19");
    getByText("20");
    getByText("21");
    getByText("22");
    getByText("23");
    getByText("24");
    getByText("25");
    getByText("26");
    getByText("27");
    getByText("28");

    expect(queryByText("29")).not.toBeOnTheScreen();
    expect(queryByText("30")).not.toBeOnTheScreen();
    expect(queryByText("31")).not.toBeOnTheScreen();
  });
});
