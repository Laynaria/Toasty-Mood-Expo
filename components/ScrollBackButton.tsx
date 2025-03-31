import { Image, Pressable, StyleSheet } from "react-native";

const backPicture = require("@/assets/icons/back.png");

type Props = {
  scrollBack: () => void;
};

export default function ScrollBackButton({ scrollBack }: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: "orange",
        },
      ]}
      onPress={scrollBack}
    >
      <Image
        source={backPicture}
        style={[styles.image, { transform: [{ rotate: "-90deg" }] }]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    bottom: 100,
    zIndex: 100,
    padding: 12,
    borderRadius: 30,
    borderColor: "white",
  },
  image: {
    height: 20,
    width: 20,
  },
});
