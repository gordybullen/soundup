import React from 'react';
import Header from './header/header';
import Modal from './modal/modal';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Header />
    {/* <Layout /> */}
    {/* <Footer /> */}
    <Switch>
      <ProtectedRoute exact path="/upload" component={Modal} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;