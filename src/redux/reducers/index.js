import { combineReducers } from 'redux';
// API
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";
import burgerMenuDuck from '../ducks/burgerMenuDuck';
import logoDuck from '../ducks/logoDuck';
import colorHeaderDuck from '../ducks/colorHeaderDuck';
import showNavbarTopDuck from '../ducks/showNavbarTopDuck';

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  languageDuck,
  loadingDuck,
  burgerMenuDuck,
  logoDuck,
  colorHeaderDuck,
  showNavbarTopDuck
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
