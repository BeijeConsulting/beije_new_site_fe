import { combineReducers } from 'redux';
// API
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";
import burgerMenuDuck from '../ducks/burgerMenuDuck';

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  languageDuck,
  loadingDuck,
  burgerMenuDuck
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
