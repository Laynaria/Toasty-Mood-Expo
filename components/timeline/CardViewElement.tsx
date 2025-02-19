import { PropsWithChildren, useContext } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

const backgroundElement: ImageSourcePropType = require("../../assets/icons/toast-empty.png");

export default function CardViewElement({ children }: PropsWithChildren) {
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
