import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth/authReducer';
import venueReducer from './venue/venueReducer';
import modalReducer from './modals/modalReducer';

export default (history) => combineReducers({
  firebase: firebaseReducer,
  form: formReducer,
  router: connectRouter(history),
  auth: authReducer,
  venue: venueReducer,
  modals: modalReducer
});
