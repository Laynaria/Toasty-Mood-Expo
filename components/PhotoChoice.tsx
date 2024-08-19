import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const camera = require("../assets/icons/camera.png");

export default function PhotoChoice({ photo, setPhoto }) {
  const photoSource = photo ? { uri: photo } : camera;

  const handlePhotoChange = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    } else {
      alert("You did not select a photo.");
    }
  };

  return (
    <Pressable style={styles.inputWrapper} onPress={handlePhotoChange}>
      <View style={styles.photoTop}>
        <Text style={{ color: "#A9692E" }}>Today's Photo</Text>
        <Text style={{ color: "#A9692E" }}>+</Text>
      </View>
      <View
        style={[
          styles.cameraWrapper,
          {
            paddingHorizontal: !photo ? 50 : 0,
            paddingVertical: !photo ? 100 : 0,
          },
        ]}
      >
        <Image
          source={photoSource}
          style={{
            width: !photo ? 54 : "100%",
            height: !photo ? 49 : 300,
            borderRadius: !photo ? 0 : 5,
          }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: "center",
    backgroundColor: "rgba(241, 239, 237, 0.5)",
    borderColor: "#E1DCDC",
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
    backgroundColor: "#E3A062",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
