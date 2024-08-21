import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MoodChoice from "../components/MoodChoice";
import { useEffect, useState } from "react";

import { getToasts, storeToasts } from "../services/storage";
import { months, daySuffix } from "../services/time";
import PhotoChoice from "../components/PhotoChoice";

const bgImg = require("../assets/background-toasts-flip.png");
const pencil = require("../assets/icons/pencil.png");

export default function NewToast() {
  const [isLoading, setIsLoading] = useState(true);

  const [selectedToast, setSelectedToast] = useState(0);
  const [note, setNote] = useState("");
  const [photo, setPhoto] = useState(null);

  const date = new Date();

  const handleSubmit = async () => {
    const existingToasts = await getToasts();
    const newToast = { selectedToast, note, moodArray: 0, date, photo };

    if (existingToasts) {
      await storeToasts([
        ...existingToasts.filter(
          (toast) =>
            new Date(toast.date).toLocaleDateString() !==
            date.toLocaleDateString()
        ),
        newToast,
      ]);
      return router.back();
    }

    await storeToasts([newToast]);

    router.back();
  };

  useEffect(() => {
    const loadToasts = async () => {
      const existingToasts = await getToasts();

      if (existingToasts) {
        const [todayToast] = existingToasts.filter(
          (toast) =>
            new Date(toast.date).toLocaleDateString() ===
            date.toLocaleDateString()
        );

        if (todayToast) {
          setNote(todayToast.note);
          setSelectedToast(todayToast.selectedToast);
          setPhoto(todayToast.photo);
        }
      }

      setIsLoading(false);
    };

    loadToasts();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#E3A062", "#FFFFFF"]}
          style={styles.gradient}
        />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#E3A062", "#FFFFFF"]}
          style={styles.gradient}
        />

        <View style={styles.subContainer}>
          <Text style={[styles.text, { marginBottom: 100 }]}>{`${
            months[date.getMonth()]
          } ${date.getDate()}${
            date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
          }`}</Text>

          <Text style={[styles.text, { fontWeight: "500" }]}>
            How was your day today?
          </Text>
          <MoodChoice
            selectedToast={selectedToast}
            setSelectedToast={setSelectedToast}
          />

          <View style={styles.inputWrapper}>
            <TextInput
              multiline
              placeholder="Today's Note"
              placeholderTextColor="#A9692E"
              style={styles.textInput}
              value={note}
              onChangeText={setNote}
            />
            {note === "" ? (
              <Image source={pencil} style={styles.pencil} />
            ) : null}
          </View>

          <PhotoChoice photo={photo} setPhoto={setPhoto} />

          <Pressable style={styles.doneButton} onPress={handleSubmit}>
            <Text style={[styles.text, { color: "white" }]}>I'm Done!</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
        <Image source={bgImg} style={styles.background} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("screen").height - 48,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 55,
    paddingBottom: 40,
  },
  subContainer: {
    width: "70%",
    height: "100%",
    gap: 20,
    justifyContent: "flex-start",
  },

  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#6A3C11",
    fontWeight: "bold",
  },

  inputWrapper: {
    justifyContent: "center",
    backgroundColor: "rgba(241, 239, 237, 0.5)",
    borderColor: "#E1DCDC",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },

  textInput: {
    color: "#6A3C11",
  },

  pencil: { position: "absolute", left: 97 },

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
    zIndex: -1,
  },

  gradient: {
    position: "absolute",
    width: "100%",
    height: "50%",
    top: 0,
  },
});
