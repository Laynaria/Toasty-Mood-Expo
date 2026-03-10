import { Pressable, StyleSheet, Text, View } from "react-native";
import ModalBackground from "../ModalBackground";
import { useContext } from "react";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";

type Props = {
  handleCloseRenewableModal: () => void;
  bottom: number;
};

export default function ChoiceRenawableModal({
  handleCloseRenewableModal,
  bottom,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  return (
    <ModalBackground handlePress={handleCloseRenewableModal}>
      <Pressable
        style={[
          styles.container,
          { backgroundColor: selectedTheme.primary, bottom },
        ]}
      >
        <View>
          <Text>Renewable Modal Open</Text>
        </View>
      </Pressable>
    </ModalBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    margin: 16,
    alignItems: "center",
    gap: 8,
  },
});
