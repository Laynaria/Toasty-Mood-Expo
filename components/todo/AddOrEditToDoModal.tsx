import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import { Dispatch, useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  isPressed: boolean;
  setIsPressed: Dispatch<boolean>;
};

export default function AddOrEditTodoModal({ isPressed, setIsPressed }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable style={styles.container} onPress={() => setIsPressed(false)}>
      <Pressable
        style={[
          styles.subContainer,
          { backgroundColor: selectedTheme.primary },
        ]}
      >
        <Text>PRESSED MODAL</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subContainer: {
    maxHeight: "75%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
