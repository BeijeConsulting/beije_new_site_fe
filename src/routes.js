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
import Community from "./screens/community/Community";
import CommunityDetail from "./screens/community/CommunityDetail";
import CareerDetail from "./screens/career/CareerDetail";
import CaseStudiesDetail from "./screens/up/CaseStudiesDetail";
import TeamBeije from "./screens/teamBeije/TeamBeije";
import ErrorPage from "./screens/ErrorPage";

export default [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/beije-consulting",
        element: <Consulting />
      },
      {
        path: "/beije-up",
        element: <Up />
      },
      {
        path: "/beije-up/:permalink",
        element: <CaseStudiesDetail />
      },
      {
        path: "/beije-talent-academy",
        element: <TalentAcademy />
      },
      {
        path: "/beije-talent-academy/academy-frontend",
        element: <AcademyFrontend />
      },
      {
        path: "/beije-talent-academy/academy-backend",
        element: <AcademyBackend />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: `/blog/:permalink`,
        element: <BlogDetail />
      },
      {
        path: "/events",
        element: <Community />
      },
      {
        path: `/events/:permalink`,
        element: <CommunityDetail />
      },
      {
        path: "/career",
        element: <Career />
      },
      {
        path: "/career/career-detail",
        element: <RequireCareerPermalink><CareerDetail /></RequireCareerPermalink>
      },
      {
        path: "/team-beije",
        element: <TeamBeije />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/error",
        element: <ErrorPage />
      },
      { path: "*", element: <RedirectUrlNewSite><NoMatch /></RedirectUrlNewSite> }
    ]
  }
];

function RequireCareerPermalink({ children }) {
  let permalink1 = new URLSearchParams(location.search).get("jobOffer");
  let permalink2 = new URLSearchParams(location.search).get("academyOffer");
  if (!permalink1 && !permalink2) {
    return <Navigate to={`/career`} />
  }

  return children;
}


function RedirectUrlNewSite({ children }) {
  let oldUrl = window.location.pathname;
  switch (oldUrl.substring(3)) {
    case "/home/consulting/":
      location.href = "/beije-consulting";
      break;
    case "/portfolio-articoli/academy-java/":
      location.href = "/beije-talent-academy/academy-backend";
      break;
    case "/portfolio-articoli/stage-javascript/":
      location.href = "/beije-talent-academy/academy-frontend";
      break;
    case "/home/community/":
      location.href = "/";
      break;
    case "/home/up/":
      location.href = "/beije-up";
      break;
    case "/home/academy/":
      location.href = "/beije-talent-academy";
      break;
  }
  return children
}