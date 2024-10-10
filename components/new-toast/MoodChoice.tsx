import { Image, Pressable, StyleSheet, View } from "react-native";

import toastsMoods from "../../services/toasts";
import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function MoodChoice({ selectedToast, setSelectedToast }) {
  const { selectedTheme } = useContext(ThemeColorContext);
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
            {
              backgroundColor:
                selectedToast === toast.id ? selectedTheme.primary : null,
            },
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
});
