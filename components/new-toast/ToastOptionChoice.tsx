import { Dispatch } from "react";
import { StyleSheet, View } from "react-native";
import TextNewToast from "./TextNewToast";
import ChoiceButton from "./ChoiceButton";

type Props = {
  text: string;
  optionState: boolean;
  setOptionState: Dispatch<boolean>;
};

export default function ToastOptionChoice({
  text,
  optionState,
  setOptionState,
}: Props) {
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
