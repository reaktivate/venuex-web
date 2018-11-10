import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';

import createRootReducer from './combineReducers';

const rrfConfig = {
  userProfile: 'users',
  enableLogging: process.env.NODE_ENV === 'development',
  logErrors: process.env.NODE_ENV === 'development'
};

const configureStore = ({ initialState, history, firebase }) => {
  const middleware = [
    routerMiddleware(history),
    thunk.withExtraArgument(getFirebase)
  ];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require
    middleware.push(logger);
  }

  const enhancers = [
    devToolsEnhancer()
  ];

  return createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        ...middleware
      ),
      reactReduxFirebase(firebase(), rrfConfig),
      ...enhancers
    )
  );
};

export default configureStore;
