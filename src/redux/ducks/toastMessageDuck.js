const SET_TOAST = 'SET_TOAST'
const INIT_TOAST = 'INIT_TOAST'

export function setToastMessage(value1, value2) {
  return {
    type: SET_TOAST,
    payload: {
      showToast: value1,
      toastState: value2
    }
  };
}

export function initToastMessage() {
  return {
    type: INIT_TOAST,
    payload: {}
  }
}


const INIT_STATE = {
  showToast: false,
  toastState: ''
}

export default function toastMessageDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_TOAST:
      newState.showToast = action.payload.showToast;
      newState.toastState = action.payload.toastState;
      break;
    case INIT_TOAST:
      newState.showToast = false;
      newState.toastState = '';
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
