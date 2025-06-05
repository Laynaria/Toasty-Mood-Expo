import { ImageSourcePropType } from "react-native";

export type subTaskType = {
  index: number;
  name: string;
  isDone: boolean;
};

export type toDoTaskType = {
  id: number;
  taskName: string;
  date: string | Date;
  category: number;
  isDone: boolean;
  subTasks: subTaskType[];
};

export type toDoCategoryType = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
};
