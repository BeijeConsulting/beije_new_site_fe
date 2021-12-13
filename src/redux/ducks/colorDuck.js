import { switchLang } from "../../i18n/i18n-config";

//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_COLOR = 'WEB/COLOR/SET_COLOR'
const INIT_COLOR = 'WEB/COLOR/INIT_COLOR'

export function setColor(value) {
    return {
        type: SET_COLOR,
        payload: {
            lightColor: value
        }
    };
}

export function initColor() {
    return {
        type: INIT_COLOR,
        payload: {}
    }
}


const INIT_STATE = {
    lightColor: false
}

export default function colorDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_COLOR:
            newState.lightColor = action.payload.lightColor;
            return newState;
        case INIT_COLOR:
            newState.lightColor = false;
            return newState;
        default:
            return state;
    }
}
