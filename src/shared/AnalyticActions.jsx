import ReactGA from "react-ga";

export const EASTER_EGG_ACTION = "Easter Egg";
export const CONTACT_ACTION = "Contact";
export const BUTTON_NAVIGATION_ACTION = "Button Navigation";
export const SOCIAL_MEDIA_ACTION = "Social Media";

export const sendAnalyticsAction = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};
