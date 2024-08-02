import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { getToasts } from "../../services/storage";
import { useEffect, useState } from "react";

import toastsMoods from "../../services/toasts";

export default function Timeline() {
  const [toasts, setToasts] = useState(null);

  useEffect(() => {
    const loadToasts = async () => {
      setToasts(await getToasts());
    };

    loadToasts();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Toasty Mood Timeline Page!!!</Text>
      {toasts?.map((toast) => (
        <View>
          <Image
            source={toastsMoods[toast.moodArray][toast.selectedToast - 1].img}
          />
          <Text>{toast.note}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
