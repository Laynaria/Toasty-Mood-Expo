import { StyleSheet, View } from "react-native";
import TextNewToast from "./TextNewToast";
import { isOrWas } from "../../services/time";
import ChoiceButton from "./ChoiceButton";

export default function ToastOptionChoice({
  text,
  optionState,
  setOptionState,
}) {
  return (
    <View style={styles.container}>
      <TextNewToast
        text={text}
        style={{
          fontWeight: "500",
          width: "100%",
        }}
      />

      <ChoiceButton
        text={"Yes"}
        optionState={optionState}
        setOptionState={setOptionState}
        value={true}
      />
      <ChoiceButton
        text={"No"}
        optionState={optionState}
        setOptionState={setOptionState}
        value={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 24,
    paddingHorizontal: 16,
  },
});
