import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

//import costants
import { ENVIRONMENT } from './utils/properties';

//import layouts
import HomeLayout from "./layout/homeLayout/HomeLayout";
import GeneralLayout from "./layout/generalLayout/GeneralLayout"; 

//import screens
import Login from './screens/Login/Login';
import Home from "./screens/Home/Home";
import RouteB from "./screens/RouteB";
import Consulting from "./screens/Consulting/Consulting";
import NoMatch from "./screens/NoMatch";

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
      // {
      //   path: `${ENVIRONMENT.ROUTING.BASE_URL}routeA/:id`,
      //   element: <RouteADetail />
      // },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.ROUTING.BASE_URL}academy`,
    element: <GeneralLayout />,
    children: [
      { index: true, element: <RequireAuth><RouteB /></RequireAuth> },
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