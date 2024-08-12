import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepagedesign from "pages/Homepagedesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepagedesign /> },
    // { path: "*", element: <NotFound /> },
    // {
    //   path: "homepagedesign",
    //   element: <Homepagedesign />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;
