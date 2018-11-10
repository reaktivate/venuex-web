import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

import { getUser } from './redux/auth/authSelectors';

// import Home from './Home';

import Sidebar from './ui/components/Sidebar';
import LoginContainer from './ui/containers/Login/LoginContainer';
import EventsContainer from './ui/containers/Events/EventsContainer';

// import Events from './Events';
// import Events from './Events';
// import ManageStaff from './ManageStaff';
// import Billing from './Billing';

// const _RedirectRoute = ({ currentUser }) => (
//   <React.Fragment>
//     {!currentUser && <Redirect to="/login" />}
//   </React.Fragment>
// );

const _VenueApp = ({ currentUser }) => {

  if (!currentUser) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <React.Fragment>
      <Sidebar>
        <Route exact path="/" component={EventsContainer} />
        <Route exact path="/events/:id" component={EventsContainer} />
        <Route exact path="/events" component={EventsContainer} />
      </Sidebar>
    </React.Fragment>
  );
};

const VenueApp = connect(state => ({
  currentUser: getUser(state)
}))(_VenueApp);

const Routes = (
  <Switch>
    <Route exact path="/login" component={LoginContainer} />
    <Route path="/" component={VenueApp} />
  </Switch>
);

class Router extends Component {
  componentDidUpdate() {

  }

  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        {Routes}
      </ConnectedRouter>
    );
  }
}

export default Router;
