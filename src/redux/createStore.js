import { createStore } from "redux";
import rootReducer from './reducers/index';
const initialState = {};
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
export default store;
