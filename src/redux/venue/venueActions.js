export const SET_VENUE = 'SET_VENUE';

export const setVenueId = venueId => {
  return dispatch => {

    dispatch({ type: SET_VENUE, payload: { venueId } });
  };
};
