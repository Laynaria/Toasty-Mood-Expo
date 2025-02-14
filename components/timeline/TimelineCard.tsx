import { useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { months, daySuffix } from "../../services/time";
import { Toast } from "../../types/toasts.types";
import CardViewElement from "./CardViewElement";

const crunchedToast = require("../../assets/icons/toast-crunched.png");
const uncrunchedToast = require("../../assets/icons/toast-uncrunched.png");

const jam = require("../../assets/icons/jam.png");
const grayJam = require("../../assets/icons/jam-gray.png");

type Props = {
  toast: Toast;
  img: ImageSourcePropType;
  weatherImg: ImageSourcePropType;
  temperatureImg: ImageSourcePropType;
};

export default function TimelineCard({
  toast,
  img,
  weatherImg,
  temperatureImg,
}: Props) {
  const { selectedTheme, colorScheme } = useContext(ThemeColorContext);
  const date = new Date(toast.date);

  const photoSource = toast.photo ? { uri: toast.photo } : null;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.date,
          {
            color:
              colorScheme() === "light"
                ? selectedTheme.secondary
                : selectedTheme.primary,
          },
        ]}
      >{`${months[date.getMonth()].slice(0, 3)}. ${date.getDate()}${
        date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
      }`}</Text>
      <View
        style={[styles.content, { backgroundColor: selectedTheme.primary }]}
      >
        <View
          style={[
            styles.dot,
            {
              backgroundColor: selectedTheme.primary,
              borderColor:
                colorScheme() === "light"
                  ? "white"
                  : selectedTheme.darkBackground,
            },
          ]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <CardViewElement>
            <Image source={img} />
          </CardViewElement>

          <CardViewElement>
            <Image source={toast.isBitey ? crunchedToast : uncrunchedToast} />
          </CardViewElement>

          <CardViewElement>
            <Image source={toast.isJamDay ? jam : grayJam} />
          </CardViewElement>

          <CardViewElement>
            <Image source={weatherImg} />
          </CardViewElement>

          <CardViewElement>
            <Image source={temperatureImg} />
          </CardViewElement>
        </View>
        {toast.note ? (
          <Text
            style={{
              color: selectedTheme.secondary,
              marginBottom: photoSource ? 0 : -5,
            }}
          >
            {toast.note}
          </Text>
        ) : null}
        {photoSource ? <Image source={photoSource} style={styles.photo} /> : ""}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    zIndex: 1,
  },
  date: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  content: {
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 32,
    borderRadius: 16,
    gap: 8,
  },
  dot: {
    position: "absolute",
    zIndex: 1,
    width: 30,
    height: 30,
    borderRadius: 60,
    borderWidth: 3,
    left: -20,
  },
  photo: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
});
