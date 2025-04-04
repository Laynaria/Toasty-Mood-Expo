import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "../types/toasts.types";
import { ThemePreference, ThemeType } from "../types/theme.types";
import { FirstDayOfTheWeek } from "../types/time.types";

type JsonValueType = string | null;

export const storeToasts = async (value: Toast[]): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem("toasts", jsonValue);
  } catch (e) {
    console.warn("Error in registering toast");
  }
};

export const getToasts = async (): Promise<Toast[] | null> => {
  try {
    const jsonValue: JsonValueType = await AsyncStorage.getItem("toasts");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your toasts");
    return null;
  }
};

export const deleteToasts = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem("toasts");
  } catch (e) {
    console.warn("Error in deleting your toasts");
  }
};

// ThemeColor

export const storeThemeColor = async (value: ThemeType): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem("themeColor", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme color");
  }
};

export const getThemeColor = async (): Promise<ThemeType | null> => {
  try {
    const jsonValue: JsonValueType = await AsyncStorage.getItem("themeColor");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme color");
    return null;
  }
};

export const storeThemePreference = async (
  value: ThemePreference
): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem("themePreference", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme preference");
  }
};

export const getThemePreference = async (): Promise<ThemePreference | null> => {
  try {
    const jsonValue: JsonValueType = await AsyncStorage.getItem(
      "themePreference"
    );

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme preference");
    return null;
  }
};

// First Day of The Week

export const storeFirstDayPreference = async (
  value: FirstDayOfTheWeek
): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem("firstDayPreference", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme preference");
  }
};

export const getFirstDayPreference =
  async (): Promise<FirstDayOfTheWeek | null> => {
    try {
      const jsonValue: JsonValueType = await AsyncStorage.getItem(
        "firstDayPreference"
      );

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.warn("Error in getting your theme preference");
      return null;
    }
  };

// ThemeToast

export const storeThemeToast = async (value: number): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem("themeToast", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme color");
  }
};

export const getThemeToast = async (): Promise<number | null> => {
  try {
    const jsonValue: JsonValueType = await AsyncStorage.getItem("themeToast");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme color");
    return null;
  }
};

// ThemeOverride

export const storeThemeOverride = async (value: boolean): Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(value);
    await AsyncStorage.setItem("themeOverride", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme color");
  }
};

export const getThemeOverride = async (): Promise<boolean | null> => {
  try {
    const jsonValue: JsonValueType = await AsyncStorage.getItem(
      "themeOverride"
    );

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme color");
    return null;
  }
};
