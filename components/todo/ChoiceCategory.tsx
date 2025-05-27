import { useContext } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { ThemeColorContext } from "@/contexts/ThemeColorContext";
import toDoCategory from "@/services/toDoCategory";

export default function ChoiceCategory() {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <Pressable>
      <Text style={{ color: selectedTheme.secondary }}>
        {toDoCategory[0].name}
      </Text>
      {/*modal select list*/}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
