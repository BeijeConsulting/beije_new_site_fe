import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { ENVIRONMENT } from './utils/properties';
import Login from './screens/Login/Login';
import Home from "./screens/Home/Home";
import RouteA from "./screens/RouteA/RouteA";
import RouteB from "./screens/RouteB";
import RouteADetail from "./screens/RouteA/RouteADetail";
import NoMatch from "./screens/NoMatch";
import BasicLayout from "./layout/BasicLayout";

export default [
  {
    path: `${ENVIRONMENT.BASE_URL}login`,
    element: <Outlet />,
    children: [
      { index: true, element: <Login /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.BASE_URL}`,
    element: <BasicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.BASE_URL}routeA`,
    element: <BasicLayout />,
    children: [
      { index: true, element: <RouteA /> },
      {
        path: `${ENVIRONMENT.BASE_URL}routeA/:id`,
        element: <RouteADetail />
      },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: `${ENVIRONMENT.BASE_URL}routeB`,
    element: <BasicLayout />,
    children: [
      { index: true, element: <RequireAuth><RouteB /></RequireAuth> },
      { path: "*", element: <NoMatch /> }
    ]
  }
];

function RequireAuth({children}) {
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