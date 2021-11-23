import { combineReducers } from 'redux';
// API
import userInfoDuck from "../ducks/UserInfo";
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";
import menuDuck from '../ducks/menuDuck';

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  userInfoDuck,
  languageDuck,
  loadingDuck,
  menuDuck
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
