import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { MODALS } from "../../shared/constants";

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

// const TestComponent = ({ children }) => {
//   return (
//     <div style={{color: 'white'}}>
//       I have children
//       <div>
//         {children}
//       </div>
//     </div>
//   )
// }

const Header = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <>
      <button
        onClick={() => openModal(MODALS.SIGN_IN)}
        className="nav-bar-button"
        id="nav-bar-btn-signin"
      >
        Sign in
      </button>

      <button
        onClick={() => openModal(MODALS.CREATE_ACCOUNT)}
        className="nav-bar-button"
        id="nav-bar-btn-create"
      >
        Create Account
      </button>
    </>
  );

  const loggedInLinks = () => (
    <>
      <Link className="nav-bar-link" id="nav-bar-btn-upload" to="/upload">
        Upload
      </Link>

      <Link
        className="nav-bar-link"
        id="nav-bar-btn-user"
        to={`/users/${currentUser.id}`}
      >
        {currentUser.username}
      </Link>

      <Link
        className="nav-bar-link"
        id="nav-bar-btn-signout"
        onClick={logout}
        to="/"
      >
        Sign out
      </Link>
    </>
  );

  const navBarRight = currentUser ? loggedInLinks() : sessionLinks();
  const placeholderText = "Search for artists, bands, tracks, podcasts";

  return (
    <nav className="nav-bar">
      {/* <TestComponent>
        <div style={{ color: 'white' }}>
          Hi, I'm a child.
        </div>
      </TestComponent>
      <TestComponent>
        <input type="text" name="" id=""/>
      </TestComponent> */}
      <div className="nav-bar-content">
        <div className="nav-bar-left">
          <a href="#" className="nav-bar-icon">
            SoundUp
          </a>
          <div className="nav-bar-links">
            <Link className="nav-bar-link" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="nav-bar-middle">
          <input
            placeholder={placeholderText}
            type="search"
            className="nav-bar-search-bar"
          />
        </div>
        <div className="nav-bar-right">{navBarRight}</div>
      </div>
    </nav>
  );
};

export default connect(mSTP, mDTP)(Header);
