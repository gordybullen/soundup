import React from 'react';
import Header from './header/header';
import Modal from './modal/modal';
import Layout from './layout/layout'
import AudioPlayer from './footer/footer_container'
// import {
//   Route,
//   Redirect,
//   Switch,
//   Link,
//   HashRouter
// } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Header />
    <Layout />
    <AudioPlayer />
  </div>
);

export default App;