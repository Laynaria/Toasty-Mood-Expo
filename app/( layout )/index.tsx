import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Calendar from "../../components/Calendar";

export default function Index() {
  return (
    <View style={styles.container}>
      <Calendar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
