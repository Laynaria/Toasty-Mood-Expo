export const filteredArray = (array, months, selectedMonth, selectedYear) =>
  array
    .sort(
      (a, b) =>
        new Date(a.date.split("T")[0]).getTime() -
        new Date(b.date.split("T")[0]).getTime()
    )
    .filter(
      (toast) =>
        new Date(toast.date).getMonth() === months.indexOf(selectedMonth) &&
        new Date(toast.date).getFullYear() === selectedYear
    );
