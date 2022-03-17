import React from "react";
// import { ENVIRONMENT } from "./utils/properties";
import Home from "./screens/home/Home";
import NoMatch from "./screens/NoMatch";
import HomeLayout from "./layout/HomeLayout";
import Up from "./screens/up/Up";
import Consulting from "./screens/consulting/Consulting";
import TalentAcademy from "./screens/talentAcademy/TalentAcademy";
import Blog from "./screens/blog/Blog";
import AcademyFrontend from "./screens/academyDetail/academyFrontend/AcademyFrontend";
import AcademyBackend from "./screens/academyDetail/academyBackend/AcademyBackend";
import Career from "./screens/career/Career"
import Contacts from "./screens/contacts/Contacts";
import BlogDetail from "./screens/blog/BlogDetail";
import { Navigate } from "react-router-dom";
import CareerDetail from "./screens/career/CareerDetail";

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
        element: <Blog />
      },
      {
        path: `/blogDetail`,
        element: <RequireBlogPermalink><BlogDetail /></RequireBlogPermalink>
      },
      {
        path: "/beije-talent-academy/academy-backend",
        element: <AcademyBackend />,
        // children: [
        //   { index: true, element: <TalentAcademy /> },
        //   {
        //     path: "/beije-talent-academy/academy-frontend",
        //     element: <AcademyFrontend />
        //   }
        // ]
      },
      {
        path: "/career",
        element: <Career />,
        // children: [
        //   { index: true, element: <TalentAcademy /> },
        //   {
        //     path: "/beije-talent-academy/academy-frontend",
        //     element: <AcademyFrontend />
        //   }
        // ]
      },
      {
        path: "/career/career-detail",
        element: <CareerDetail />,
        // children: [
        //   { index: true, element: <TalentAcademy /> },
        //   {
        //     path: "/beije-talent-academy/academy-frontend",
        //     element: <AcademyFrontend />
        //   }
        // ]
      },
      {
        path: "/contacts",
        element: <Contacts />,
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

function RequireBlogPermalink({ children }) {
  let permalink = new URLSearchParams(location.search).get("article");
  if (!permalink) {
    return <Navigate to={`/blog`} />
  }

  return children;
}