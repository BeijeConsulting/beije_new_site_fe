import React from 'react';
import { useRoutes } from "react-router-dom";
import ReactGa from 'react-ga';
import SiteRoutes from './routes';
import { googleAnalyticsKey } from "./utils/properties";
import RouteChangeTracker from "./components/functional_components/RouteChangeTracker";

export default function App() {
  ReactGa.initialize(googleAnalyticsKey);
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(SiteRoutes);

  return <><RouteChangeTracker />{element}</>;
}