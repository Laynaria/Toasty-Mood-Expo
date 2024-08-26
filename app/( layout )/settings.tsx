import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ClearAllData from "../../components/ClearAllData";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Toasty Mood Settings Page!!!</Text>

      {/* <ClearAllData /> */}

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
