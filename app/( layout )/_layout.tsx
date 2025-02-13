import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

const bgImg = require("../../assets/background-toasts.png");

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
