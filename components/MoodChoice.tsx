import { Image, Pressable, StyleSheet, View } from "react-native";

import toastsMoods from "../services/toasts";

export default function MoodChoice({ selectedToast, setSelectedToast }) {
  const handleToastChange = (id) => {
    setSelectedToast(id);
  };

  return (
    <View style={styles.container}>
      {toastsMoods[0].map((toast) => (
        <Pressable
          key={toast.id}
          style={[
            styles.button,
            selectedToast === toast.id ? styles.selected : null,
          ]}
          onPress={() => handleToastChange(toast.id)}
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
