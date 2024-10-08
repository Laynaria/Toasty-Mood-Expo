export const daysName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const daySuffix = ["st", "nd", "rd"];

export const calendarFlexgrow = (daysInmonth) => {
  if (daysInmonth === 29) {
    return 6;
  }

  if (daysInmonth === 30) {
    return 5;
  }

  if (daysInmonth === 31) {
    return 4;
  }

  return 0;
};

export const years = (year) => {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];

  for (let i = year; i <= currentYear; i++) {
    yearsArray.push(i);
  }

  return yearsArray;
};
