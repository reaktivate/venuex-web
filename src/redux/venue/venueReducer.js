import { SET_VENUE, GET_LOGO } from './venueActions';

const initState = {
  venueId: null,
  logo: null
};

const venueReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VENUE:
      return {
        ...state,
        venueId: action.payload.venueId
      };
    case GET_LOGO:
      return {
        ...state,
        logo: action.payload
      };

    default:
      return state;
  }
};

export default venueReducer;
