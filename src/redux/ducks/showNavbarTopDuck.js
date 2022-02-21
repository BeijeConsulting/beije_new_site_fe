const SET_VISIBILITY_NAVBAR = 'SET_VISIBILITY_NAVBAR'
const INIT_VISIBILITY_NAVBAR = 'INIT_VISIBILITY_NAVBAR'

export function setVisibilityNavbar(value) {
  return {
    type: SET_VISIBILITY_NAVBAR,
    payload: {
      showNavbar: value
    }
  };
}

export function initVisibilityNavbar() {
  return {
    type: INIT_VISIBILITY_NAVBAR,
    payload: {}
  }
}


const INIT_STATE = {
  showNavbar: false
}

export default function showNavbarTopDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_VISIBILITY_NAVBAR:
      newState.showNavbar = action.payload.showNavbar;
      break;
    case INIT_VISIBILITY_NAVBAR:
      newState.showNavbar = false;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
