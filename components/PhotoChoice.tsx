import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const camera = require("../assets/icons/camera.png");

export default function PhotoChoice({ photo, setPhoto }) {
  return (
    <Pressable style={styles.inputWrapper}>
      <View style={styles.photoTop}>
        <Text style={{ color: "#A9692E" }}>Today's Photo</Text>
        <Text style={{ color: "#A9692E" }}>+</Text>
      </View>
      <View style={styles.cameraWrapper}>
        <Image source={!photo ? camera : photo} />
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
    paddingHorizontal: 50,
    paddingVertical: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3A062",
    borderRadius: 12,
  },
});
