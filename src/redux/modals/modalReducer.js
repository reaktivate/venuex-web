import { OPEN_MODAL, CLOSE_MODAL } from './modalActions';

const initialState = {
  modals: [],
};

function reducer(state = initialState, action) {
  let modalId = action.obj ? action.obj.id : '';
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modals: state.modals.concat(action.obj)
      };
    case CLOSE_MODAL:
      if (!modalId) {
        modalId = state.modals[state.modals.length - 1].id;
      }
      return {
        ...state,
        modals: state.modals.filter(item => item.id !== modalId),
      };
    default:
      return state;
  }
}

export default reducer;
