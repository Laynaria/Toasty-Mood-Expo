import { StyleSheet, Text, View } from "react-native";

export default function ToDo() {
  return (
    <View style={styles.container}>
      <Text>Toasty Mood To Do Page!!!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
