import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

//import costants
import { ENVIRONMENT } from './utils/properties';

//import layouts
import HomeLayout from "./layout/homeLayout/HomeLayout";
import GeneralLayout from "./layout/generalLayout/GeneralLayout";

//import screens
import Login from './screens/Login/Login';
import Home from './screens/home/Home'
import Consulting from './screens/consulting/Consulting'
import Academy from "./screens/academy/Academy";
import AcademyJava from "./screens/academyJava/AcademyJava"
import Up from "./screens/up/Up";
import NoMatch from "./screens/NoMatch";
import AcademyFrontend from "./screens/academyFrontend/AcademyFrontend";
import Career from "./screens/career/Career";
import WhoWeAre from "./screens/whoWeAre/WhoWeAre";

export default [
  {
    path: `${ENVIRONMENT.ROUTING.LOGIN_URL}`,
    element: <Outlet />,
    children: [
      { index: true, element: <Login /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}`,
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}consulting`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <Consulting /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}academy`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <Academy />  },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}academy/masterBackend`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <AcademyJava /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}academy/masterFrontend`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <AcademyFrontend /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  // {
  //   path: `${ENVIRONMENT.ROUTING.BASE_URL}academy`,
  //   element: <GeneralLayout />,
  //   children: [
  //     { index: true, element: <Academy /> },
  //     {
  //       path: `${ENVIRONMENT.ROUTING.BASE_URL}academy/masterBackend`,
  //       element: <AcademyJava />
  //     },
  //     {
  //       path: `${ENVIRONMENT.ROUTING.BASE_URL}academy/masterFrontend`,
  //       element: <AcademyFrontend />
  //     },
  //     { path: "*", element: <NoMatch /> }
  //   ]
  // },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}up`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <Up /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}whoweare`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <WhoWeAre /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}career`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <Career /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}cicci`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <RequireAuth><Up /></RequireAuth> },
      { path: "*", element: <NoMatch /> }
    ]
  }
];

function RequireAuth({ children }) {
  const localUserInfo = localStorage.getItem('userInfo');
  const auth = (localUserInfo && localUserInfo !== ''); // !!! Important. Create function that check if user leggd in. This check is provvisory
  const location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}