import { combineReducers } from 'redux';
// API
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";
import burgerMenuDuck from '../ducks/burgerMenuDuck';
import logoDuck from '../ducks/logoDuck';
import colorHeaderDuck from '../ducks/colorHeaderDuck';
import showNavbarTopDuck from '../ducks/showNavbarTopDuck';
import modalDuck from '../ducks/modalDuck';
import currentPageDuck from '../ducks/currentPageDuck';
import heightHeaderDuck from '../ducks/heightHeaderDuck';

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  languageDuck,
  loadingDuck,
  burgerMenuDuck,
  logoDuck,
  colorHeaderDuck,
  showNavbarTopDuck,
  modalDuck,
  currentPageDuck,
  heightHeaderDuck
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
