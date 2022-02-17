//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_COLOR_HEADER = 'WEB/COLOR_HEADER/SET_COLOR_HEADER'
const INIT_COLOR_HEADER = 'WEB/COLOR_HEADER/INIT_COLOR_HEADER'

export function setColorHeader(value) {
    return {
        type: SET_COLOR_HEADER,
        payload: {
            colorHeader: value
        }
    };
}

export function initColorHeader() {
    return {
        type: INIT_COLOR_HEADER,
        payload: {}
    }
}


const INIT_STATE = {
    colorHeader: 'transparent'
}

export default function colorHeaderDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_COLOR_HEADER:
            newState.colorHeader = action.payload.colorHeader;
            return newState;
        case INIT_COLOR_HEADER:
            newState.colorHeader = 'transparent';
            return newState;
        default:
            return state;
    }
}
