import { switchLang } from "../../i18n/i18n-config";

const SET_MENU = 'WEB/MENU/SET_MENU'
const INIT_MENU = 'WEB/MENU/INIT_MENU'

export function setMenu(value) {
    return {
        type: SET_MENU,
        payload: {
            menuOpen: value
        }
    };
}

export function initMenu() {
    return {
        type: INIT_MENU,
        payload: {}
    }
}


const INIT_STATE = {
    menuOpen: false
}

export default function menuDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_MENU:
            newState.menuOpen = action.payload.menuOpen;
            return newState;
        case INIT_MENU:
            newState.menuOpen = false;
            return newState;
        default:
            return state;
    }
}
