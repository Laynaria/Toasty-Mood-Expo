import { Dispatch, useContext } from "react";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";
import { Pressable, StyleSheet, Text } from "react-native";
import { settingsOptionText } from "../../services/settingsServices";
import { ThemePreference } from "../../types/theme.types";
import { FirstDayOfTheWeek } from "../../types/time.types";

type Props = {
  array: ThemePreference[] | FirstDayOfTheWeek[] | boolean[];
  selectFunction:
    | Dispatch<ThemePreference>
    | Dispatch<FirstDayOfTheWeek>
    | Dispatch<boolean>;
  optionComparison: string | boolean;
};

export default function SettingsOptionSelector({
  array,
  selectFunction,
  optionComparison,
}: Props) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <>
      {array.map((option: string | boolean, index: number) => (
        <Pressable
          key={index}
          onPress={() => selectFunction(option as never)}
          style={[
            styles.button,
            {
              backgroundColor:
                option === optionComparison
                  ? selectedTheme.secondary
                  : selectedTheme.primary,
              borderColor: selectedTheme.secondary,
            },
          ]}
        >
          <Text
            style={{
              color:
                option === optionComparison
                  ? selectedTheme.primary
                  : selectedTheme.secondary,
              textTransform: "capitalize",
            }}
          >
            {settingsOptionText(option)}
          </Text>
        </Pressable>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 2,
  },
});
