import { useContext } from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import toDoCategory from "@/services/toDoCategory";

type Props = {
  category: number;
  openCategoryModal: () => void;
};

export default function ChoiceCategory({ category, openCategoryModal }: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable
      style={[styles.container, { borderColor: selectedTheme.secondary }]}
      onPress={openCategoryModal}
    >
      <Image source={toDoCategory[category].icon} style={styles.icon} />
      <Text style={{ color: selectedTheme.secondary }}>
        {toDoCategory[category].name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 4,
  },
});
