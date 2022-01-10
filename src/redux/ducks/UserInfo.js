import { isEmpty } from "lodash";
const SET_USER_INFO = 'SET_USER_INFO'
const USER_LOGOUT = 'USER_LOGOUT'

export function setUserInfo(value) {
  return {
    type: SET_USER_INFO,
    payload: {
      userInfo: value
    }
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
    payload: {}
  }
}

const INIT_STATE = {
  userInfo: {}
}

export default function userInfoDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  const localUserInfo = localStorage.getItem('userInfo');
  switch (action.type) {
    case SET_USER_INFO:
      newState.userInfo = action.payload.userInfo;
      localStorage.setItem('userInfo', JSON.stringify(action.payload.userInfo));
      break;
    case USER_LOGOUT:
      newState.userInfo = {};
      localStorage.removeItem('userInfo');
      break;
    default:
      /*
        If I'm here, the user change manually route or refresh page and now the state is empty.
        So I check if I'm not in login and is logged in by localstorage. If I haven't localstorage and I have empty state, I redirect to login 
      */
      newState = state;
      if (isEmpty(newState.userInfo) && localUserInfo) {
          newState.userInfo = JSON.parse(localUserInfo);
      }
      break;
  }
  return newState;
}
