import { getVal } from 'react-redux-firebase';

export const firebaseGet = (state, ...args) => getVal(state.firebase, ...args);
