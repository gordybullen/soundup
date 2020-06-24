import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <>
      <Link
        className="nav-bar-button"
        id="nav-bar-btn-signin"
        to="/login">Sign in
      </Link>

      <Link
        className="nav-bar-button"
        id="nav-bar-btn-create"
        to="/signup">Create Account
      </Link>
    </>
  );

  const loggedInLinks = () => (
    <>
      <Link 
        className="nav-bar-link" 
        id="nav-bar-btn-upload" 
        to="/upload">Upload
      </Link>

      <Link
        className="nav-bar-link"
        id="nav-bar-btn-user"
        to={`/users/${currentUser.id}`}>{currentUser.username}
      </Link>

      <button
        className="nav-bar-link"
        id="nav-bar-btn-signout"
        onClick={logout}>Sign out
      </button>
    </>
  );

  const navBarRight = currentUser ? loggedInLinks() : sessionLinks();
  const placeholderText = "Search for artists, bands, tracks, podcasts";

  return (
    <nav className="nav-bar">
      <div className="nav-bar-content">
        <div className="nav-bar-left">
          <a href="#" className="nav-bar-icon">SoundUp</a>
          <div className="nav-bar-links">
            <Link className="nav-bar-link" to="/">Home</Link>
          </div>
        </div>
        <div className="nav-bar-middle">
          <input 
            placeholder={placeholderText}
            type="search" 
            className="nav-bar-search-bar"
          />
        </div>
        <div className="nav-bar-right">
          {navBarRight}
        </div>
      </div>
    </nav>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);