import { Dispatch, useContext } from "react";
import { Image, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { ToastsMoodsPictureObject } from "../../types/toasts.types";
import { temperatureArray } from "../../types/temperature.types";
import { weatherArray } from "../../types/weather.type";

type Props = {
  array: ToastsMoodsPictureObject[] | temperatureArray | weatherArray;
  optionState: number;
  setOptionState: Dispatch<number>;
  styleProp?: ViewStyle;
};

export default function ChoiceComponent({
  array,
  optionState,
  setOptionState,
  styleProp = {},
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View style={[styles.container, styleProp]}>
      {array.map((element) => (
        <Pressable
          key={element.id}
          style={[
            styles.button,
            {
              backgroundColor:
                optionState === element.id ? selectedTheme.primary : null,
            },
          ]}
          onPress={() => setOptionState(element.id)}
        >
          <Image source={element.img} />
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
