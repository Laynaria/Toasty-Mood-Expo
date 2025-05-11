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
  icon: ImageSourcePropType;
  isDone: boolean;
  subTasks: subTaskType[];
};
