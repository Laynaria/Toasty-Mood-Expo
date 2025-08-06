import { PropsWithChildren } from "react";
import { FlexAlignType, Pressable, StyleSheet } from "react-native";

type Props = {
  handlePress: () => void;
  alignItems?: FlexAlignType;
};

export default function ModalBackground({
  handlePress,
  alignItems,
  children,
}: Props & PropsWithChildren) {
  return (
    <Pressable style={[styles.container, { alignItems }]} onPress={handlePress}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 20,
    backgroundColor: "rgba(0 ,0 ,0 , 0.2)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
