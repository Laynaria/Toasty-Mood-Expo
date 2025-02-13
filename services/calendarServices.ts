import { router } from "expo-router";

export const handleCalendarToastRedirect = (
  date: Date,
  index: number,
  currentOffset: number
) => {
  if (date.getTime() <= new Date().getTime()) {
    router.push({
      pathname: `/new-toast/${date}`,
      params: { index, previousOffset: currentOffset },
    });
  }
};
