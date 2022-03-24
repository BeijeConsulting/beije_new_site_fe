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
        path: "/beije-up/case-studies",
        element: <RequireCaseStudiesPermalink><CaseStudiesDetail /></RequireCaseStudiesPermalink>
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
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/community",
        element: <Community />
      },
      {
        path: `/blogDetail`,
        element: <RequireBlogPermalink><BlogDetail /></RequireBlogPermalink>
      },
      {
        path: `/communityDetail`,
        element: <RequireCommunityPermalink><CommunityDetail /></RequireCommunityPermalink>
      },
      {
        path: "/beije-talent-academy/academy-backend",
        element: <AcademyBackend />
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
        path: "/contacts",
        element: <Contacts />
      },
      { path: "*", element: <RedirectUrlNewSite><NoMatch /></RedirectUrlNewSite> }
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

function RequireCommunityPermalink({ children }) {
  let permalink = new URLSearchParams(location.search).get("event");
  if (!permalink) {
    return <Navigate to={`/community`} />
  }

  return children;
}

function RequireCareerPermalink({ children }) {
  let permalink = new URLSearchParams(location.search).get("jobOffer");
  if (!permalink) {
    return <Navigate to={`/career`} />
  }

  return children;
}

function RequireCaseStudiesPermalink({ children }) {
  let permalink = new URLSearchParams(location.search).get("caseStudy");
  if (!permalink) {
    return <Navigate to={`/beije-up`} />
  }

  return children;
}



function RedirectUrlNewSite({ children }) {
  let oldUrl = window.location.pathname;
  switch (oldUrl.substring(3)) {
    case "/home/consulting":
      location.href = "/beije-consulting";
      break;
    case "/portfolio-articoli/academy - java":
      location.href = "/beije-talent-academy";
      break;
    case "/home/community":
      location.href = "/beije-community";
      break;
    case "/home/up":
      location.href = "/beije-up";
      break;
    case "/home/academy":
      location.href = "/beije-talent-academy";
      break;
  }
  return children
}