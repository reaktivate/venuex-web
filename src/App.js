import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';

import firebase from './firebase';
import { onLogin } from './redux/auth/authActions';
import { setVenueId } from './redux/venue/venueActions';
import configureStore from './redux/store';
import Router from './Router';
import VenueConfigProvider from './providers/VenueConfigProvider';
import VenueThemeProvider from './providers/VenueThemeProvider';


class App extends Component {

  constructor(...args) {
    super(...args);
    const { venueId } = this.props;
    const initialState = {};

    this.history = createHashHistory();

    this.store = configureStore({
      initialState,
      history: this.history,
      firebase
    });

    this.store.dispatch(setVenueId(venueId));
  }

  componentDidMount() {
    firebase().auth().onAuthStateChanged(user => {
      if (user) {
        this.store.dispatch(onLogin(user));
      }
    });
  }

  render() {

    return (
      <Provider store={this.store}>
        <VenueConfigProvider>
          <VenueThemeProvider>
            <Router history={this.history} />
          </VenueThemeProvider>
        </VenueConfigProvider>
      </Provider>
    );
  }
}

export default App;
