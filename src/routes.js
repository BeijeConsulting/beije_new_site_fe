import React from "react";
// import { ENVIRONMENT } from "./utils/properties";
import Home from "./screens/home/Home";
import NoMatch from "./screens/NoMatch";
import BasicLayout from "./layout/BasicLayout";

export default [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "/courses",
      //   element: <Courses />,
      //   children: [
      //     { index: true, element: <CoursesIndex /> },
      //     { path: "/courses/:id", element: <Course /> }
      //   ]
      // },
      { path: "*", element: <NoMatch /> }
    ]
  }
];