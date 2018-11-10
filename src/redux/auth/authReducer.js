import {
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './authActions';

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed'
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        authError: null
      };

    default:
      return state;
  }
};

export default authReducer;
