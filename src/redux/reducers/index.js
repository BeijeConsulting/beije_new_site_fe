import { combineReducers } from 'redux';
// API
import userInfoDuck from "../ducks/UserInfo";
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  userInfoDuck,
  languageDuck,
  loadingDuck
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
