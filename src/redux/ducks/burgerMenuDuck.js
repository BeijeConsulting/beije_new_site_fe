const SET_MENU = 'SET_MENU'
const INIT_MENU = 'INIT_MENU'

export function setMenu(value) {
  return {
    type: SET_MENU,
    payload: {
      menuOpen: value
    }
  };
}

export function initMenu() {
  return {
    type: INIT_MENU,
    payload: {}
  }
}


const INIT_STATE = {
  menuOpen: false
}

export default function burgerMenuDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_MENU:
      newState.menuOpen = action.payload.menuOpen;
      break;
    case INIT_MENU:
      newState.menuOpen = false;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
