import { subTaskType, toDoTaskType } from "@/types/todo.types";

export const isAllTaskDone = (array: subTaskType[] | toDoTaskType[]): boolean =>
  array.every((task) => task.isDone);
