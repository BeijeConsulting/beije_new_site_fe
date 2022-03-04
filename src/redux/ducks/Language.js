import { switchLang } from "../../i18n/i18n-config";

const SET_LANGUAGE = 'SET_LANGUAGE'
const INIT_LANGUAGE = 'INIT_LANGUAGE'

export function setLanguage(value) {
  return {
    type: SET_LANGUAGE,
    payload: {
      currentLanguage: value
    }
  };
}

export function initLanguage() {
  return {
    type: INIT_LANGUAGE,
    payload: {}
  }
}


const INIT_STATE = {
  currentLanguage: ''
}

export default function languageDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  const localLang = localStorage.getItem('currentLanguage');
  switch (action.type) {
    case SET_LANGUAGE:
      newState.currentLanguage = action.payload.currentLanguage;
      localStorage.setItem('currentLanguage', action.payload.currentLanguage);
      break;
    case INIT_LANGUAGE:
      newState.currentLanguage = 'GB';
      break;
    default:
      /*
        If I'm here, the user change manually route or refresh page and now the state is empty.
      */
      newState = state;
      if (newState.currentLanguage === '' && localLang) {
        newState.currentLanguage = localLang;
        switchLang(localLang);
      }
      break;
  }
  return newState;
}
