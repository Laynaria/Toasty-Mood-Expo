import CalendarCard from "@/components/calendar/CalendarCard";
import { moodAccessibility } from "@/services/accessibility";
import { daySuffix, months } from "@/services/time";
import { CalendarDayType } from "@/types/time.types";
import { render } from "@testing-library/react-native";

const mockedPhoto = require("../../../ressources-readme/screen-home.jpg");

const mockedDate = new Date("December 17, 2015");

const mockedDayNumber = mockedDate.getDate();

const mockedDay = (isBitey: boolean): CalendarDayType => ({
  day: mockedDayNumber,
  toast: {
    date: mockedDate.toDateString(),
    isBitey: isBitey,
    isJamDay: true,
    moodArray: 3,
    weather: 1,
    temperature: 5,
    note: "This is a mocked Test",
    photo: mockedPhoto,
    selectedToast: 4,
  },
});

describe("<CalendarCard />", () => {
  test("Check if not Bitey toast shows date and correct placeholder for mood icon without showing bitey additional icon", () => {
    const { getByText, getByLabelText, queryByLabelText } = render(
      <CalendarCard
        day={mockedDay(false)}
        date={mockedDate}
        index={27}
        currentOffset={512}
        imgSource={mockedPhoto}
      />
    );

    getByText(mockedDayNumber.toString());

    getByLabelText(
      `${months[mockedDate.getMonth()]} ${mockedDate.getDate()}${
        mockedDate.getDate() > 3 ? "th" : daySuffix[mockedDate.getDate() - 1]
      } ${mockedDate.getFullYear()} ${moodAccessibility[4]} mood icon`
    );

    expect(queryByLabelText("Bitey option active icon")).not.toBeOnTheScreen();
  });

  test("Check if component shows correctly text and label text on days without registered toast, witout showing bitey additional icon", () => {
    const { getByText, getByLabelText, queryByLabelText } = render(
      <CalendarCard
        day={{ day: mockedDayNumber, toast: null }}
        date={mockedDate}
        index={27}
        currentOffset={512}
        imgSource={mockedPhoto}
      />
    );

    getByText(mockedDayNumber.toString());

    getByLabelText(
      `${months[mockedDate.getMonth()]} ${mockedDate.getDate()}${
        mockedDate.getDate() > 3 ? "th" : daySuffix[mockedDate.getDate() - 1]
      } ${mockedDate.getFullYear()} no mood selected mood icon`
    );

    expect(queryByLabelText("Bitey option active icon")).not.toBeOnTheScreen();
  });
});
