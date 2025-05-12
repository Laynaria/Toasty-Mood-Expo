import { View, StyleSheet } from "react-native";
import { AddToDoButton } from "./AddToDoButton";

export default function AddOrEditToDo() {
  return (
    <View style={styles.container}>
      <AddToDoButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "absolute",
    right: 15,
    bottom: 15,
  },
});
