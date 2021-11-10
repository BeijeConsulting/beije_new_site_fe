const SET_LOADING = 'SET_LOADING'
const INIT_LOADING = 'INIT_LOADING'

export function setLoading(value) {
  return {
    type: SET_LOADING,
    payload: {
      pageIsLoading: value
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
  pageIsLoading: false
}

export default function loadingDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_LOADING:
      newState.pageIsLoading = action.payload.pageIsLoading;
      break;
    case INIT_LOADING:
      newState.pageIsLoading = false;
      break;
    default:
      break;
  }
  return newState;
}
