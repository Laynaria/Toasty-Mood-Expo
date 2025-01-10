import { StyleSheet, View } from "react-native";
import TextNewToast from "./TextNewToast";
import { isOrWas } from "../../services/time";
import ChoiceButton from "./ChoiceButton";

export default function JamDayChoice({ date, isJamDay, setIsJamDay }) {
  return (
    <View style={styles.container}>
      <TextNewToast
        text={`${isOrWas(date)} it a Jam Day?
            `}
        style={{
          fontWeight: "500",
          width: "100%",
        }}
      />

      <ChoiceButton
        text={"Yes"}
        isJamDay={isJamDay}
        setIsJamDay={setIsJamDay}
        value={true}
      />
      <ChoiceButton
        text={"No"}
        isJamDay={isJamDay}
        setIsJamDay={setIsJamDay}
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
    columnGap: 24,

    paddingHorizontal: 16,
  },
});
