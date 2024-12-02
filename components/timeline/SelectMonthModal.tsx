import { Platform, StyleSheet, Text, View } from "react-native";

export default function SelectMonthModal({ timelineFunction }) {
  return (
    <View
      style={[
        styles.container,
        { elevation: Platform.OS === "android" ? 10 : 0 },
      ]}
    >
      <Text style={{ textAlign: "center" }}>MODAL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    zIndex: 10,
    position: "absolute",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
