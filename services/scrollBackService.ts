import { RefObject } from "react";
import { ScrollView } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { DataCalendar } from "@/types/time.types";

export const scrollBack = (ref: RefObject<FlashList<DataCalendar>>): void => {
  ref?.current?.scrollToOffset({ offset: 0, animated: false });
};

export const scrollToTop = (ref: RefObject<ScrollView>): void => {
  ref.current?.scrollTo({
    y: 0,
    animated: true,
  });
};
