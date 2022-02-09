import React from "react";
import { Link } from "react-router-dom";

const RouteA = () => {
  return (
    <div>
      <h2>ROUTE A</h2>
      <Link to="/routeA/123">Vai al dettaglio</Link>
    </div>
  );
}

export default RouteA;