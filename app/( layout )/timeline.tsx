import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { getToasts } from "../../services/storage";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import toastsMoods from "../../services/toasts";
import TimelineCard from "../../components/TimelineCard";

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
      {toasts?.map((toast) => (
        <TimelineCard
          key={toast.date}
          toast={toast}
          img={toastsMoods[toast.moodArray][toast.selectedToast - 1].img}
        />
      ))}
      <LinearGradient
        colors={["#FFFFFF", "#E3A062", "#FFFFFF"]}
        style={styles.timebar}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 2,
  },
  timebar: {
    width: 2,
    height: "100%",
    position: "absolute",
    left: 30,
  },
});
