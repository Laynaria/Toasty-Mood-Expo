import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";

const bgImg: ImageSourcePropType = require("../../assets/background-toasts.png");

export default function RootLayout() {
  return (
    <>
      <Header />
      <Slot />
      <View />
      <Image source={bgImg} style={styles.background} />
      <Navbar />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    bottom: 65,
  },
});
