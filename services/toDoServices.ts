import { subTaskType, toDoTaskType } from "@/types/todo.types";

export const isAllTaskDone = (array: subTaskType[] | toDoTaskType[]): boolean =>
  array.every((task) => task.isDone);

export const dateText = (date: Date | string): string => {
  const dateArray = new Date(date).toUTCString().split(", ")[1].split(" ");
  const dotOrNot = dateArray[1].length > 3 ? "." : "";
  const dateString = `${dateArray[1].slice(0, 3)}${dotOrNot} ${
    dateArray[0]
  } ${dateArray[3].slice(0, 5)}`;

  return dateString;
};
