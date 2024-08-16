import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { deleteToasts } from "../../services/storage";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Toasty Mood Settings Page!!!</Text>
      <Pressable onPress={deleteToasts}>
        <Text>Delete Toasts</Text>
      </Pressable>

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
