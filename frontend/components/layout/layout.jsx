import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import Landing from './pages/landing';
import TrackForm from './pages/tracks/track_form';
import TrackShow from './pages/tracks/track_show';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <Switch>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute exact path="/tracks/:trackId" component={TrackShow} />
          <ProtectedRoute exact path="/upload" component={TrackForm} />
          {/* <ProtectedRoute exact path="/users/:username" component={UserShow} /> */}
          <Redirect to="/" />
          {/* <Route path="*" render={() => <Redirect to="/test" />} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default Layout;