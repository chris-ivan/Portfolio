import { toast } from "react-toastify";
import { fetchBadgeContainer } from "./API";

export const checkIsMobile = () => {
  const testExp = new RegExp(
    "Android|webOS|iPhone|iPad|" +
      "BlackBerry|Windows Phone|" +
      "Opera Mini|IEMobile|Mobile",
    "i"
  );
  return testExp.test(navigator.userAgent);
};

export const handleDesktopTouch = () => {
  !checkIsMobile() &&
    toast.dark(
      "Sorry, but this website currently doesn't support touch gestures on desktop :("
    );
};

export const setBadgeContainerArray = (arr) =>
  arr.map((item) => ({
    src: item.icon ? item.icon.asset.url : "",
    alt: item.label,
    label: item.label,
  }));

export const fetchBadgeContainerData = (dataToFetch, setItem) => {
  fetchBadgeContainer(dataToFetch).then((data) => {
    const sortedData = dataToFetch.map(
      (item) => data.filter((resItem) => resItem.name === item)[0]
    );
    setItem(sortedData);
  });
};
