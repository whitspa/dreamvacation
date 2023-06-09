import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row p-3">
          <li className="mx-4">
            <Link to="/activities">Activities</Link>
          </li>
          <li className="mx-4">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-4">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row p-3">
          <li className="mx-4">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-4">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-4">
            <Link to="/activities">Activities</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-3">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span>
          Vacation Resort
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
