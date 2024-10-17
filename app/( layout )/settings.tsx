import { StyleSheet, View } from "react-native";
import ThemeColor from "../../components/settings/ThemeColor";
import ThemeSetting from "../../components/settings/ThemeSetting";
import WeekDaySetting from "../../components/settings/WeekDaySetting";
// import ClearAllData from "../../components/ClearAllData";

export default function Settings() {
  return (
    <View style={styles.container}>
      <ThemeColor />
      <ThemeSetting />
      <WeekDaySetting />

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
