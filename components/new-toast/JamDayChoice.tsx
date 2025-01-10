import { StyleSheet, Text, View } from "react-native";
import TextNewToast from "./TextNewToast";
import { isOrWas } from "../../services/time";

export default function JamDayChoice({ date, isJamDay, setIsJamDay }) {
  return (
    <View style={styles.container}>
      <TextNewToast
        text={`${isOrWas(date)} it a Jam Day?
            `}
        style={{
          fontWeight: "500",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
