import { ImageSourcePropType } from "react-native";

export type toDoDate = string | null;

export type subTaskType = {
  index: number;
  name: string;
  isDone: boolean;
};

export type toDoTaskType = {
  id: number;
  taskName: string;
  date: toDoDate;
  category: number;
  isDone: boolean;
  finished_at: toDoDate;
  subTasks: subTaskType[];
};

export type toDoCategoryType = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
};
