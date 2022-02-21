import { logo_primary_light } from "../../utils/properties"

const SET_LOGO = 'SET_LOGO'
const INIT_LOGO = 'INIT_LOGO'

export function setLogo(value) {
  return {
    type: SET_LOGO,
    payload: {
      logo: value
    }
  };
}

export function initLogo() {
  return {
    type: INIT_LOGO,
    payload: {}
  }
}


const INIT_STATE = {
  logo: logo_primary_light
}

export default function logoDuck(state = INIT_STATE, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_LOGO:
      newState.logo = action.payload.logo;
      break;
    case INIT_LOGO:
      newState.logo = logo_primary_light;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
