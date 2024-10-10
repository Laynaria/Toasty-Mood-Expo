import { StyleSheet, View } from "react-native";
// import ClearAllData from "../../components/ClearAllData";
import ThemeColor from "../../components/settings/ThemeColor";
import ThemeSetting from "../../components/settings/ThemeSetting";

export default function Settings() {
  return (
    <View style={styles.container}>
      <ThemeColor />
      <ThemeSetting />

      {/* <ClearAllData /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});
