export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = credentials => {
  return (dispatch, getState, firebase) => {
    const state = getState();
    const { venueId } = state.venue;

    firebase().auth()
      .signInWithEmailAndPassword(
        `${venueId}+${credentials.email}`,
        credentials.password
      )
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, payload: { error } });
      });
  };
};

export const onLogin = user => {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: { user } });
  };
};
