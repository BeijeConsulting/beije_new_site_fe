import { switchLang } from "../../i18n/i18n-config";

//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//while when the value is true the hamburger menu is white
const SET_COLOR_BURGER = 'WEB/BURGERMENU/SET_COLOR_BURGER'
const INIT_COLOR_BURGER = 'WEB/BURGERMENU/SET_COLOR_BURGER'

export function setColorBurger(value) {
    return {
        type: SET_COLOR_BURGER,
        payload: {
            menuOpen: value
        }
    };
}

export function initColorMenu() {
    return {
        type: INIT_COLOR_BURGER,
        payload: {}
    }
}


const INIT_STATE = {
    menuOpen: false
}

export default function menuDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_COLOR_BURGER:
            newState.menuOpen = action.payload.menuOpen;
            return newState;
        case INIT_COLOR_BURGER:
            newState.menuOpen = false;
            return newState;
        default:
            return state;
    }
}
