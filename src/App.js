import { useRoutes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SiteRoutes from './routes';
import ReactGa from 'react-ga4';

// Functions
import { googleAnalyticsKey } from "./utils/properties";

export default function App() {
  const location = useLocation();
  ReactGa.initialize(googleAnalyticsKey);
  ReactGa.send({ hitType: "pageview", page: location.pathname });
  let element = useRoutes(SiteRoutes);

  return element;
}