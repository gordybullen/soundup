import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const home = <Link className="nav-bar-button" to="/">Home</Link>;
  const navLeft = <nav className="nav-bar-left">{home}</nav>

  const sessionLinks = () => (
    <nav className="nav-bar-right">
      &nbsp;  &nbsp;
      <Link className="nav-bar-button" id="nav-btn-signin" to="/login">Sign in</Link>
      &nbsp;  &nbsp;
      <Link className="nav-bar-button" id="nav-btn-create" to="/signup">Create Account</Link>
    </nav>
  );

  const loggedInLinks = () => (
    <nav className="nav-bar-right">
      &nbsp;  &nbsp;
      <Link className="nav-bar-button" id="nav-btn-upload" to="/upload">Upload</Link>
      &nbsp;  &nbsp;
      <Link className="nav-bar-button" id="nav-btn-user" to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
      &nbsp;  &nbsp;
      <button className="nav-bar-button" id="nav-btn-signout" onClick={logout}>Sign out</button>
    </nav>
  );

  let navRight;
  currentUser ? navRight = loggedInLinks() : navRight = sessionLinks();

  return (
    <nav className="nav-bar">
      {navLeft}

      <input type="search" name="" id="nav-bar-search"/>

      {navRight}
    </nav>
  )
};

export default NavBar;