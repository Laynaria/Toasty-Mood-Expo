import { useContext } from "react";
import { Image, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

const backgroundElement = require("../../assets/icons/toast-empty.png");

export default function CardViewElement({ children }) {
  const { selectedTheme } = useContext(ThemeColorContext);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={backgroundElement}
        style={{
          tintColor: selectedTheme.secondary,
          position: "absolute",
          opacity: 0.3,
          height: 44,
          width: 44,
        }}
      />
      {children}
    </View>
  );
}
