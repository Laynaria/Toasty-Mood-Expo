import { ImageSourcePropType } from "react-native";

export type ToastsMoodsPictureObject = {
  id: number;
  img: ImageSourcePropType;
  jamImg: ImageSourcePropType;
};

export type Toast = {
  date: string;
  isBitey: boolean;
  isJamDay: boolean;
  moodArray: number;
  weather: number;
  temperature: number;
  note: string;
  photo: string;
  selectedToast: number;
};
