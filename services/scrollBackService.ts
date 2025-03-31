import { RefObject } from "react";
import { FlashList } from "@shopify/flash-list";
import { DataCalendar } from "@/types/time.types";

export const scrollBack = (ref: RefObject<FlashList<DataCalendar>>): void => {
  ref?.current?.scrollToOffset({ offset: 0, animated: false });
};
