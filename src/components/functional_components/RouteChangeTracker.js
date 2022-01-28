import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteChangeTracker = () => {
  const location = useLocation();
  // ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
  return <></>;
};

export default RouteChangeTracker;