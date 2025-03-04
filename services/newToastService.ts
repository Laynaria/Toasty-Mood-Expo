import * as ImagePicker from "expo-image-picker";
import { Dispatch } from "react";
import { getToasts, storeToasts } from "./storage";
import { router } from "expo-router";
import { Toast } from "../types/toasts.types";

export const handlePhotoChange = async (
  photo: string,
  setPhoto: Dispatch<string>
): Promise<void> => {
  let result: ImagePicker.ImagePickerResult =
    await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

  if (!result.canceled) {
    setPhoto(result.assets[0].uri);
  } else if (!photo) {
    alert("You did not select a photo.");
  }
};

export const handleToastSubmit = async (
  selectedToast: number,
  isJamDay: boolean,
  isBitey: boolean,
  weather: number,
  temperature: number,
  note: string,
  selectedThemeToast: number,
  date: Date,
  photo: string,
  index: string | string[],
  previousOffset: string | string[]
): Promise<void> => {
  const existingToasts: Toast[] | null = await getToasts();
  const newToast: Toast = {
    selectedToast,
    isJamDay,
    isBitey,
    weather,
    temperature,
    note,
    moodArray: selectedThemeToast,
    date: date.toISOString(),
    photo,
  };

  if (selectedToast !== 0) {
    if (existingToasts) {
      await storeToasts([
        ...existingToasts.filter(
          (toast) =>
            new Date(toast.date).toLocaleDateString() !==
            date.toLocaleDateString()
        ),
        newToast,
      ]);
      return router.push({
        pathname: "/",
        params: { index, previousOffset },
      });
    }

    await storeToasts([newToast]);

    router.push({ pathname: "/", params: { index, previousOffset } });
  }
};

export const loadSpecificToast = async (
  date: Date,
  setNote: Dispatch<string>,
  setSelectedToast: Dispatch<number>,
  setPhoto: Dispatch<string>,
  setWeather: Dispatch<number>,
  setTemperature: Dispatch<number>,
  setIsJamDay: Dispatch<boolean>,
  setIsBitey: Dispatch<boolean>,
  setIsLoading: Dispatch<boolean>
): Promise<void> => {
  const existingToasts: Toast[] | null = await getToasts();

  if (existingToasts) {
    const [todayToast]: Toast[] = existingToasts.filter(
      (toast) =>
        new Date(toast.date).toLocaleDateString() === date.toLocaleDateString()
    );

    if (todayToast) {
      setNote(todayToast.note);
      setSelectedToast(todayToast.selectedToast);
      setPhoto(todayToast.photo);

      if (todayToast.weather) {
        setWeather(todayToast.weather);
      }

      if (todayToast.temperature) {
        setTemperature(todayToast.temperature);
      }

      if (todayToast.isJamDay) {
        setIsJamDay(todayToast.isJamDay);
      }

      if (todayToast.isBitey) {
        setIsBitey(todayToast.isBitey);
      }
    }
  }

  setIsLoading(false);
};
