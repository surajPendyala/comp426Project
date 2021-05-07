import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Navigation () {
  return (
    <div className="navigation">
      <NavLink class="nav-link" to="/">Home </NavLink>
      <NavLink class="nav-link" to="/recipe"> Recipes </NavLink>
      <NavLink class="nav-link" to="/proverb">Proverb </NavLink>
      <NavLink class="nav-link" to="/bored">Bored </NavLink>
      <NavLink class="nav-link" to="/music">Music </NavLink>
      <NavLink class="nav-link" to="/snake">Snake </NavLink>
    </div>        
  );
}

export default withRouter(Navigation);