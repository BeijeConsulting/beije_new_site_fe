const SET_HEIGHT_HEADER = 'SET_HEIGHT_HEADER'
const INIT_HEIGHT_HEADER = 'INIT_HEIGHT_HEADER'

export function setHeightHeader(value) {
  return {
    type: SET_HEIGHT_HEADER,
    payload: {
      heightHeader: value
    }
  };
}

export function initHeightHeader() {
  return {
    type: INIT_HEIGHT_HEADER,
    payload: {}
  }
}


const INIT_STATE = {
  heightHeader: null
}

export default function heightHeaderDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_HEIGHT_HEADER:
      newState.heightHeader = action.payload.heightHeader;
      break;
    case INIT_HEIGHT_HEADER:
      newState.heightHeader = null;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
