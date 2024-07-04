import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const bgImg = require("../assets/background-toasts-flip.png");

export default function NewToast() {
  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daySuffix = ["st", "nd", "rd"];

  const handleSubmit = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#E3A062", "#FFFFFF"]} style={styles.gradient} />
      <View style={styles.subContainer}>
        <Text style={[styles.text, { marginBottom: 100 }]}>{`${
          months[date.getMonth()]
        } ${date.getDay()}${
          date.getDay() > 3 ? "th" : daySuffix[date.getDay() - 1]
        }`}</Text>
        <Text style={styles.text}>How was your day today?</Text>
        <TextInput multiline placeholder="Today's Note" />

        <Pressable style={styles.doneButton} onPress={handleSubmit}>
          <Text style={[styles.text, { color: "white" }]}>I'm Done!</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
      <Image source={bgImg} style={styles.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 55, // 55 ou 80
  },
  subContainer: {
    width: "70%",
    height: "100%",
    gap: 10,
    justifyContent: "flex-start",
  },

  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#6A3C11",
  },

  doneButton: {
    backgroundColor: "#E3A062",
    width: "100%",
    padding: 12,
    borderRadius: 12,
  },

  background: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },

  gradient: {
    position: "absolute",
    width: "100%",
    height: "50%",
    top: 0,
  },
});
