const SET_LOADING = 'SET_LOADING';
const SET_BOUNCE = 'SET_BOUNCE';
const INIT_LOADING = 'INIT_LOADING';

export function setLoading(value) {
  return {
    type: SET_LOADING,
    payload: {
      pageIsLoading: value
    }
  };
}

export function setBounce(value) {
  return {
    type: SET_BOUNCE,
    payload: {
      pageIsBouncing: value
    }
  };
}

export function initLoading() {
  return {
    type: INIT_LOADING,
    payload: {
      pageIsLoading: false
    }
  }
}

const INIT_STATE = {
  pageIsLoading: false,
  pageIsBouncing: false
}

export default function loadingDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_LOADING:
      newState.pageIsLoading = action.payload.pageIsLoading;
      break;
    case SET_BOUNCE:
      newState.pageIsBouncing = action.payload.pageIsBouncing;
      break;
    case INIT_LOADING:
      newState.pageIsLoading = false;
      newState.pageIsBouncing = false;
      break;
    default:
      break;
  }
  return newState;
}
