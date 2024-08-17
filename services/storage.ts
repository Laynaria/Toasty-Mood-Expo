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
