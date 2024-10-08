import { StyleSheet, Text, View } from "react-native";

export default function Shop() {
  return (
    <View style={styles.container}>
      <Text>Toasty Mood Shop Page!!!</Text>
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
