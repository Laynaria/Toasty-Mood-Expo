import { Href, router } from "expo-router";

export const handlePreviousPageNavigation = (
  previousPage: string | string[],
  previousOffset: string | string[],
  index: string | string[]
): void => {
  previousPage
    ? router.navigate(previousPage as Href)
    : router.navigate({ pathname: "/", params: { index, previousOffset } });
};

export const handleHeaderNavigation = (
  link: "/todo" | "/theme",
  path: string
): void => {
  router.navigate({
    pathname: link,
    params: { previousPage: path },
  });
};
