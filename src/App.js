import React from "react";
import { useRoutes } from "react-router-dom";
import SiteRoutes from './routes';
import ReactGa from 'react-ga';

// Functions
import { googleAnalyticsKey } from "./utils/properties";

// Components
import RouteChangeTracker from "./components/functional_components/RouteChangeTracker";

export default function App() {
  ReactGa.initialize(googleAnalyticsKey);
  <RouteChangeTracker />
  let element = useRoutes(SiteRoutes);

  return element;
}