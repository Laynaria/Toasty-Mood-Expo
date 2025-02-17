import * as ImagePicker from "expo-image-picker";
import { Dispatch } from "react";

export const handlePhotoChange = async (
  photo: string,
  setPhoto: Dispatch<string>
) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    setPhoto(result.assets[0].uri);
  } else if (!photo) {
    alert("You did not select a photo.");
  }
};
