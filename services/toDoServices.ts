import { subTaskType, toDoDate, toDoTaskType } from "@/types/todo.types";

export const isAllTaskDone = (array: subTaskType[] | toDoTaskType[]): boolean =>
  array.every((task) => task.isDone);

export const dateText = (date: toDoDate): string | null => {
  if (date) {
    const [_, month, dayNumber, __, hour] = new Date(date)
      .toString()
      .split(" ");

    const dotOrNot = month === "May" ? "" : ".";

    const dateString = `${month}${dotOrNot} ${dayNumber} ${hour.slice(0, 5)}`;

    return dateString;
  }
  return null;
};
