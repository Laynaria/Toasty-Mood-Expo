import { Slot } from "expo-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Slot />
      <Navbar />
    </>
  );
}
