const SET_MODAL = 'SET_MODAL'
const INIT_MODAL = 'INIT_MODAL'

export function setModal(value1, value2) {
  return {
    type: SET_MODAL,
    payload: {
      modalOpen: value1,
      typeModal: value2
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
  modalOpen: false,
  typeModal: null
}

export default function modalDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_MODAL:
      newState.modalOpen = action.payload.modalOpen;
      newState.typeModal = action.payload.typeModal;
      break;
    case INIT_MODAL:
      newState.modalOpen = false;
      newState.typeModal = null;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
