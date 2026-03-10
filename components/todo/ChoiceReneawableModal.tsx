import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ModalBackground from "../ModalBackground";
import { useContext, useState } from "react";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";

type Props = {
  originalDelay: string | undefined;
  handleCloseRenewableModal: () => void;
  handleRenewable: (delay: string | undefined) => void;
  bottom: number;
};

export default function ChoiceRenawableModal({
  originalDelay,
  handleCloseRenewableModal,
  handleRenewable,
  bottom,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);
  const [delay, setDelay] = useState<string | undefined>(originalDelay);

  const handleTextChange = () => {
    setDelay(delay);
  };

  return (
    <ModalBackground handlePress={handleCloseRenewableModal}>
      <Pressable
        style={[
          styles.container,
          { backgroundColor: selectedTheme.primary, bottom },
        ]}
      >
        <View>
          <TextInput
            placeholder="0"
            // keyboardType="numeric"
            // lag and also may be bugged with string typing
            maxLength={4}
            value={delay}
            onChangeText={handleTextChange}
          />
          <Pressable onPress={() => handleRenewable(delay)}>
            <Text>Validate</Text>
          </Pressable>
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
