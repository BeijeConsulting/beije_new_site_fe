import { combineReducers } from 'redux';
// API
import userInfoDuck from "../ducks/UserInfo";
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";
import menuDuck from '../ducks/menuDuck';
import colorDuck from '../ducks/colorDuck'
import visibilityDuck from '../ducks/visibilityDuck';
import colorHeaderDuck from '../ducks/colorHeaderDuck';
import pageFocusDuck from '../ducks/pageFocusDuck';
import communityApiDuck from '../ducks/communityApiDuck';
import blogApiDuck from '../ducks/blogApiDuck';
import careerApiDuck from '../ducks/careerApiDuck';

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  userInfoDuck,
  languageDuck,
  loadingDuck,
  menuDuck,
  colorDuck,
  visibilityDuck,
  colorHeaderDuck,
  pageFocusDuck,
  communityApiDuck,
  blogApiDuck,
  careerApiDuck
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
