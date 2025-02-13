import { router } from "expo-router";

export const handlePreviousPageNavigation = (
  previousPage: string | string[],
  previousOffset: string | string[],
  index: string | string[]
) => {
  previousPage
    ? router.navigate(previousPage as string)
    : router.navigate({ pathname: "/", params: { index, previousOffset } });
};
