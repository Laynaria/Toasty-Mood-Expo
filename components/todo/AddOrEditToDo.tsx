import { View, StyleSheet, Text } from "react-native";
import { AddToDoButton } from "./AddToDoButton";
import { Dispatch } from "react";

type Props = {
  isPressed: boolean;
  setIsPressed: Dispatch<boolean>;
};

export default function AddOrEditToDo({ isPressed, setIsPressed }: Props) {
  return (
    <View style={styles.container}>
      <AddToDoButton setIsPressed={setIsPressed} />

      {isPressed ? <Text>PRESSED</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "absolute",
    right: 15,
    bottom: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
