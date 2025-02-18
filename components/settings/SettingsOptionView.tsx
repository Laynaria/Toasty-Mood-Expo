import { PropsWithChildren, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

type Props = {
  text: string;
  columnGap?: boolean;
};

export default function SettingsOptionView({
  text,
  columnGap = true,
  children,
}: Props & PropsWithChildren) {
  const { selectedTheme } = useContext(ThemeColorContext);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: selectedTheme.primary,
          columnGap: columnGap ? 24 : 0,
        },
      ]}
    >
      <Text style={[styles.text, { color: selectedTheme.secondary }]}>
        {text}
      </Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 24,
    width: "90%",
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 30,
    borderRadius: 16,
    zIndex: 1,
  },
  text: {
    fontWeight: "bold",
    width: "100%",
  },
});
