import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to SoundUp</h1>, root);

  // for testing only!!!

  window.signup = signup;
  window.login = login;
  window.logout = logout;
});