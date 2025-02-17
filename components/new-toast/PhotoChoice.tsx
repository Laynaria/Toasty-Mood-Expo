import { Dispatch, useContext } from "react";
import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { handlePhotoChange } from "../../services/newToastService";

const camera = require("../../assets/icons/camera.png");

type Props = {
  photo: string;
  setPhoto: Dispatch<string>;
};

export default function PhotoChoice({ photo, setPhoto }: Props) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const photoSource: ImageSourcePropType = photo ? { uri: photo } : camera;

  const tintColor = () => {
    if (photoSource !== camera) {
      return "";
    }

    if (colorScheme() !== "light") {
      return selectedTheme.darkBackground;
    }

    return "white";
  };

  return (
    <Pressable
      style={[styles.inputWrapper, { borderColor: selectedTheme.primary }]}
      onPress={() => handlePhotoChange(photo, setPhoto)}
    >
      <View style={styles.photoTop}>
        <Text
          style={{
            color: selectedTheme.primary,
          }}
        >
          Today's Photo
        </Text>
        <Text
          style={{
            color: selectedTheme.primary,
          }}
        >
          +
        </Text>
      </View>
      <View
        style={[
          styles.cameraWrapper,
          {
            paddingHorizontal: !photo ? 50 : 0,
            paddingVertical: !photo ? 100 : 0,
            backgroundColor: selectedTheme.primary,
          },
        ]}
      >
        <Image
          source={photoSource}
          style={{
            width: !photo ? 54 : "100%",
            height: !photo ? 49 : 300,
            borderRadius: !photo ? 0 : 5,
            tintColor: tintColor(),
          }}
          recyclingKey={photo}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  photoTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 5,
  },
  cameraWrapper: {
    margin: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
