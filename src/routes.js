import React from "react";
// import { ENVIRONMENT } from "./utils/properties";
import Home from "./screens/home/Home";
import NoMatch from "./screens/NoMatch";
import HomeLayout from "./layout/HomeLayout";
import Up from "./screens/up/Up";
import Consulting from "./screens/consulting/Consulting";
import TalentAcademy from "./screens/talentAcademy/TalentAcademy";
import AcademyFrontend from "./screens/academyFrontend/AcademyFrontend";
import Blog from "./screens/blog/Blog";

export default [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/beije-consulting",
        element: <Consulting />,
        // children: [
        //   { index: true, element: <CoursesIndex /> },
        //   { path: "/courses/:id", element: <Course /> }
        // ]
      },
      {
        path: "/beije-up",
        element: <Up />,
        // children: [
        //   { index: true, element: <CoursesIndex /> },
        //   { path: "/courses/:id", element: <Course /> }
        // ]
      },
      {
        path: "/beije-talent-academy",
        element: <TalentAcademy />,
        // children: [
        //   { index: true, element: <TalentAcademy /> },
        //   {
        //     path: "/beije-talent-academy/academy-frontend",
        //     element: <AcademyFrontend />
        //   }
        // ]
      },
      {
        path: "/beije-talent-academy/academy-frontend",
        element: <AcademyFrontend />,
        // children: [
        //   { index: true, element: <TalentAcademy /> },
        //   {
        //     path: "/beije-talent-academy/academy-frontend",
        //     element: <AcademyFrontend />
        //   }
        // ]
      },
      {
        path: "/blog",
        element: <Blog />,
        // children: [
        //   { index: true, element: <TalentAcademy /> },
        //   {
        //     path: "/beije-talent-academy/academy-frontend",
        //     element: <AcademyFrontend />
        //   }
        // ]
      },
      { path: "*", element: <NoMatch /> }
    ]
  }
];