import { getVenueId } from './venueSelectors';
import database from '../../firebase';

export const SET_VENUE = 'SET_VENUE';
export const GET_LOGO = 'GET_LOGO';

export const setVenueId = venueId => {
  return dispatch => {

    dispatch({ type: SET_VENUE, payload: { venueId } });
  };
};

export const getLogo = (logo) => ({ type: GET_LOGO, payload: logo });

export function getLogoThunk() {
  return (dispatch, getState) => {
    const venueId = getVenueId(getState());
    const existingLogo = getState().firebase.data.venues[venueId].logo;
    if (existingLogo) {
      dispatch(getLogo(existingLogo));
    } else {
      database().storage().ref().child(`venues/${venueId}/assets/images/splash_screen_logo.png`)
        .getDownloadURL()
        .then((url) => {
          dispatch(getLogo(url));
        });
    }
  };
}
