import { Image, Pressable, StyleSheet, View } from "react-native";

import toastsMoods from "../services/toasts";
import { useState } from "react";

export default function MoodChoice() {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      {toastsMoods[0].map((toast) => (
        <Pressable
          key={toast.id}
          style={[
            styles.button,
            selected === toast.id ? styles.selected : null,
          ]}
          onPress={() => setSelected(toast.id)}
        >
          <Image source={toast.img} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 3,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selected: {
    backgroundColor: "#E3A062",
  },
});
