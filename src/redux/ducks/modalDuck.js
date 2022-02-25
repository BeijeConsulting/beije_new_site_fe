const SET_MODAL = 'SET_MODAL'
const INIT_MODAL = 'INIT_MODAL'

export function setModal(value) {
  return {
    type: SET_MODAL,
    payload: {
      modalOpen: value
    }
  };
}

export function initModal() {
  return {
    type: INIT_MODAL,
    payload: {}
  }
}


const INIT_STATE = {
  modalOpen: false
}

export default function modalDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_MODAL:
      newState.modalOpen = action.payload.modalOpen;
      break;
    case INIT_MODAL:
      newState.modalOpen = false;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
