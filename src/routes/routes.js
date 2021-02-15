import { lazy } from "react";

const LandingPage = lazy(() =>
  import("../pages/LandingPage").then((module) => ({
    default: module.LandingPage,
  }))
);

const ProjectPreviewPage = lazy(() =>
  import("../pages/ProjectPreviewPage").then((module) => ({
    default: module.ProjectPreviewPage,
  }))
);

const ProjectPage = lazy(() =>
  import("../pages/ProjectPage").then((module) => ({
    default: module.ProjectPage,
  }))
);

const AboutPage = lazy(() =>
  import("../pages/AboutPage").then((module) => ({
    default: module.AboutPage,
  }))
);

const ContactPage = lazy(() =>
  import("../pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  }))
);

const Page404 = lazy(() =>
  import("../pages/404").then((module) => ({
    default: module.Page404,
  }))
);

// update di button kalo dipake
export const routes = [
  {
    label: "Home",
    path: "/",
    component: LandingPage,
  },
  {
    label: "Projects",
    path: "/project",
    component: ProjectPreviewPage,
  },
  {
    label: "",
    path: "/project/:id",
    component: ProjectPage,
  },
  {
    label: "About Me",
    path: "/about",
    component: AboutPage,
  },
  {
    label: "Contact",
    path: "/contact",
    component: ContactPage,
  },
  {
    label: "",
    path: "/404",
    component: Page404,
  },
];
