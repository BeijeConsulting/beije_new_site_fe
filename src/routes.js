import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import Community from "./screens/community/Community";
import CareerDetail from "./screens/career/CareerDetail";
import CaseStudiesDetail from "./screens/up/CaseStudiesDetail";
import ErrorPage from "./screens/ErrorPage";
import Events from "./screens/events/Events";
import EventsDetail from "./screens/events/EventsDetail";

export default [
  {
    path: ":lang",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "beije-consulting",
        element: <Consulting />
      },
      {
        path: "beije-up",
        element: <Up />
      },
      {
        path: "beije-up/:permalink",
        element: <CaseStudiesDetail />
      },
      {
        path: "beije-talent-academy",
        element: <TalentAcademy />
      },
      {
        path: "beije-talent-academy/academy-frontend",
        element: <AcademyFrontend />
      },
      {
        path: "beije-talent-academy/academy-backend",
        element: <AcademyBackend />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "blog/:permalink",
        element: <BlogDetail />
      },
      {
        path: "events",
        element: <Events />
      },
      {
        path: "events/:permalink",
        element: <EventsDetail />
      },
      {
        path: "career",
        element: <Career />
      },
      {
        path: "career/career-detail",
        element: <RequireCareerPermalink><CareerDetail /></RequireCareerPermalink>
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "error",
        element: <ErrorPage />
      },
      { path: "*", element: <RedirectUrlNewSite><NoMatch /></RedirectUrlNewSite> }
    ]
  },
  {
    path: "/",
    element: <RedirectToLanguage />,
  }
];

function RedirectToLanguage() {
  const { i18n } = useTranslation();
  const { pathname, search } = useLocation();
  return <Navigate replace to={`${i18n.resolvedLanguage}${pathname}${search ? search : ""}`} />
}

function RequireCareerPermalink({ children }) {
  const { i18n } = useTranslation();
  let permalink1 = new URLSearchParams(location.search).get("jobOffer");
  let permalink2 = new URLSearchParams(location.search).get("academyOffer");
  if (!permalink1 && !permalink2) {
    return <Navigate replace to={`/${i18n.resolvedLanguage}/career`} />
  }

  return children;
}


function RedirectUrlNewSite({ children }) {
  const { i18n } = useTranslation();
  let oldUrl = window.location.pathname;
  let newUrl = "";
  switch (oldUrl.replace(/\/it|\/en/g, "")) {
    case "/home/consulting/":
      newUrl = "/beije-consulting";
      break;
    case "/portfolio-articoli/academy-java/":
      newUrl = "/beije-talent-academy/academy-backend";
      break;
    case "/portfolio-articoli/stage-javascript/":
      newUrl = "/beije-talent-academy/academy-frontend";
      break;
    case "/home/community/":
      newUrl = "/";
      break;
    case "/home/up/":
      newUrl = "/beije-up";
      break;
    case "/home/academy/":
      newUrl = "/beije-talent-academy";
      break;
    default:
      break;
  }
  return newUrl !== "" ? <Navigate replace to={`/${i18n.resolvedLanguage}${newUrl}`} /> : children
}