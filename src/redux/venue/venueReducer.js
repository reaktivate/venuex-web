import { SET_VENUE } from './venueActions';

const initState = {
  venueId: null
};

const venueReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VENUE:
      return {
        ...state,
        venueId: action.payload.venueId
      };

    default:
      return state;
  }
};

export default venueReducer;
