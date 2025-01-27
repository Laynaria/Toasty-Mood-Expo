import { Image, Pressable, StyleSheet, View } from "react-native";

import toastsMoods from "../../services/toasts";
import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";

export default function MoodChoice({ selectedToast, setSelectedToast }) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const { selectedThemeToast } = useContext(ThemeToastContext);

  const handleToastChange = (id) => {
    setSelectedToast(id);
  };

  return (
    <View style={styles.container}>
      {toastsMoods[selectedThemeToast].map((toast) => (
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
