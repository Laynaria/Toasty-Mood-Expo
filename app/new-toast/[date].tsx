import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

import { months, daySuffix, isOrWas } from "../../services/time";
import { getToasts, storeToasts } from "../../services/storage";

import GradientNewToast from "../../components/new-toast/GradientNewToast";
import TextNewToast from "../../components/new-toast/TextNewToast";
import PhotoChoice from "../../components/new-toast/PhotoChoice";
import ToastOptionChoice from "../../components/new-toast/ToastOptionChoice";
import { ThemeToastContext } from "../../contexts/ThemeToastContext";
import ChoiceComponent from "../../components/new-toast/ChoiceComponent";
import weatherIcons from "../../services/weather";
import toastsMoods from "../../services/toasts";
import temperatureIcons from "../../services/temperature";

const bgImg = require("../../assets/background-toasts-flip.png");
const pencil = require("../../assets/icons/pencil.png");

export default function NewToast() {
  const [isLoading, setIsLoading] = useState(true);

  const [selectedToast, setSelectedToast] = useState(0);
  const [isJamDay, setIsJamDay] = useState(false);
  const [isBitey, setIsBitey] = useState(false);
  const [weather, setWeather] = useState(1);
  const [temperature, setTemperature] = useState(2);
  const [note, setNote] = useState("");
  const [photo, setPhoto] = useState(null);

  const { selectedTheme } = useContext(ThemeColorContext);
  const { selectedThemeToast } = useContext(ThemeToastContext);

  const date = new Date(useGlobalSearchParams().date as string);
  const { index, previousOffset } = useLocalSearchParams();

  const handleSubmit = async () => {
    const existingToasts = await getToasts();
    const newToast = {
      selectedToast,
      isJamDay,
      isBitey,
      weather,
      temperature,
      note,
      moodArray: selectedThemeToast,
      date: date.toISOString(),
      photo,
    };

    if (selectedToast !== 0) {
      if (existingToasts) {
        await storeToasts([
          ...existingToasts.filter(
            (toast) =>
              new Date(toast.date).toLocaleDateString() !==
              date.toLocaleDateString()
          ),
          newToast,
        ]);
        return router.push({
          pathname: "/",
          params: { index, previousOffset },
        });
      }

      await storeToasts([newToast]);

      router.push({ pathname: "/", params: { index, previousOffset } });
    }
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

          if (todayToast.weather) {
            setWeather(todayToast.weather);
          }

          if (todayToast.temperature) {
            setTemperature(todayToast.temperature);
          }

          if (todayToast.isJamDay) {
            setIsJamDay(todayToast.isJamDay);
          }

          if (todayToast.isBitey) {
            setIsBitey(todayToast.isBitey);
          }
        }
      }

      setIsLoading(false);
    };

    loadToasts();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <GradientNewToast />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <GradientNewToast />

        <View style={styles.subContainer}>
          <TextNewToast
            text={`${months[date.getMonth()]} ${date.getDate()}${
              date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
            } ${date.getFullYear()}`}
            style={{ marginBottom: 100 }}
          />

          <TextNewToast
            text={`How was your day ${
              isOrWas(date) === "Is" ? "today" : "that day"
            }?`}
            style={{
              fontWeight: "500",
            }}
          />

          <ChoiceComponent
            array={toastsMoods[selectedThemeToast]}
            optionState={selectedToast}
            setOptionState={setSelectedToast}
          />

          <ToastOptionChoice
            text="Were you Bitey?"
            optionState={isBitey}
            setOptionState={setIsBitey}
          />

          <ToastOptionChoice
            text={`${isOrWas(date)} it a Jam Day?`}
            optionState={isJamDay}
            setOptionState={setIsJamDay}
          />

          <TextNewToast
            text={`How was the weather ${
              isOrWas(date) === "Is" ? "today" : "that day"
            }?`}
            style={{
              fontWeight: "500",
            }}
          />

          <ChoiceComponent
            array={weatherIcons}
            optionState={weather}
            setOptionState={setWeather}
            styleProp={{
              columnGap: 16,
              rowGap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          />

          <TextNewToast
            text={`How was the temperature ${
              isOrWas(date) === "Is" ? "today" : "that day"
            }?`}
            style={{
              fontWeight: "500",
            }}
          />

          <ChoiceComponent
            array={temperatureIcons}
            optionState={temperature}
            setOptionState={setTemperature}
            styleProp={{
              columnGap: 16,
              rowGap: 8,
              justifyContent: "center",
            }}
          />

          <View
            style={[
              styles.inputWrapper,
              { borderColor: selectedTheme.primary },
            ]}
          >
            <TextInput
              multiline
              placeholder="Today's Note"
              placeholderTextColor={selectedTheme.primary}
              style={{ color: selectedTheme.primary }}
              value={note}
              onChangeText={setNote}
            />
            {note === "" ? (
              <Image
                source={pencil}
                style={[styles.pencil, { tintColor: selectedTheme.primary }]}
              />
            ) : null}
          </View>

          <PhotoChoice photo={photo} setPhoto={setPhoto} />

          <Pressable
            style={[
              styles.doneButton,
              { backgroundColor: selectedTheme.primary },
            ]}
            onPress={handleSubmit}
          >
            <TextNewToast text="I'm Done!" style={{}} />
          </Pressable>
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

  inputWrapper: {
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },

  pencil: { position: "absolute", left: 97, zIndex: -1 },

  doneButton: {
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
});
