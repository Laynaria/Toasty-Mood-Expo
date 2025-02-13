import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "../types/toasts.types";
import { ThemePreference, ThemeType } from "../types/theme.types";
import { FirstDayOfTheWeek } from "../types/time.types";

export const storeToasts = async (value: Toast[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("toasts", jsonValue);
  } catch (e) {
    console.warn("Error in registering toast");
  }
};

export const getToasts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("toasts");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your toasts");
  }
};

export const deleteToasts = async () => {
  try {
    await AsyncStorage.removeItem("toasts");
  } catch (e) {
    console.warn("Error in deleting your toasts");
  }
};

// ThemeColor

export const storeThemeColor = async (value: ThemeType) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("themeColor", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme color");
  }
};

export const getThemeColor = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("themeColor");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme color");
  }
};

export const storeThemePreference = async (value: ThemePreference) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("themePreference", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme preference");
  }
};

export const getThemePreference = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("themePreference");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme preference");
  }
};

// First Day of The Week

export const storeFirstDayPreference = async (value: FirstDayOfTheWeek) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("firstDayPreference", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme preference");
  }
};

export const getFirstDayPreference = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("firstDayPreference");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme preference");
  }
};

// ThemeToast

export const storeThemeToast = async (value: number) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("themeToast", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme color");
  }
};

export const getThemeToast = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("themeToast");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme color");
  }
};

// ThemeOverride

export const storeThemeOverride = async (value: boolean) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("themeOverride", jsonValue);
  } catch (e) {
    console.warn("Error in registering your theme color");
  }
};

export const getThemeOverride = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("themeOverride");

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Error in getting your theme color");
  }
};
