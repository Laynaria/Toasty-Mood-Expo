import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToasts = async (value) => {
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

// Theme

export const storeThemeColor = async (value) => {
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

export const storeThemePreference = async (value) => {
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

export const storeFirstDayPreference = async (value) => {
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
