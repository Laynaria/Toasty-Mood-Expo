import { Image, Pressable, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export default function ChoiceComponent({
  array,
  optionState,
  setOptionState,
  styleProp = {},
}) {
  const { selectedTheme } = useContext(ThemeColorContext);

  const handleToastChange = (id) => {
    setOptionState(id);
  };

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
          onPress={() => handleToastChange(element.id)}
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
