const SET_COLOR_HEADER = 'SET_COLOR_HEADER'
const INIT_COLOR_HEADER = 'INIT_COLOR_HEADER'

export function setColorHeader(value) {
  return {
    type: SET_COLOR_HEADER,
    payload: {
      colorHeader: value
    }
  };
}

export function initColorHeader() {
  return {
    type: INIT_COLOR_HEADER,
    payload: {}
  }
}


const INIT_STATE = {
  colorHeader: "transparent"
}

export default function colorHeaderDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_COLOR_HEADER:
      newState.colorHeader = action.payload.colorHeader;
      break;
    case INIT_COLOR_HEADER:
      newState.colorHeader = "transparent";
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
