import { combineReducers } from 'redux';
// API
import languageDuck from "../ducks/Language";
import loadingDuck from "../ducks/Loading";

// const rootReducer = combineReducers({

// });

const appReducer = combineReducers({
  languageDuck,
  loadingDuck
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
