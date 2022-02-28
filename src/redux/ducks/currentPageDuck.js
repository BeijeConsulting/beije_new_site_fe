const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const INIT_CURRENT_PAGE = 'INIT_CURRENT_PAGE'

export function setCurrentPage(value) {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage: value
    }
  };
}

export function initCurrentPage() {
  return {
    type: INIT_CURRENT_PAGE,
    payload: {}
  }
}


const INIT_STATE = {
  currentPage: ""
}

export default function currentPageDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_CURRENT_PAGE:
      newState.currentPage = action.payload.currentPage;
      break;
    case INIT_CURRENT_PAGE:
      newState.currentPage = "";
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
