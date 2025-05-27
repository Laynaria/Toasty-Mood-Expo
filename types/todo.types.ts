import { ImageSourcePropType } from "react-native";

export type subTaskType = {
  index: number;
  name: string;
  isDone: boolean;
};

export type toDoTaskType = {
  id: number;
  taskName: string;
  date: string;
  category: number;
  isDone: boolean;
  subTasks: subTaskType[];
};

export type toDoCategoryType = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
};
