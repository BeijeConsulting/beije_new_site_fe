//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_PAGE_FOCUS = 'WEB/PAGE_FOCUS/SET_PAGE_FOCUS'
const INIT_PAGE_FOCUS = 'WEB/PAGE_FOCUS/INIT_PAGE_FOCUS'

export function setPageFocus(value) {
    return {
        type: SET_PAGE_FOCUS,
        payload: {
            page: value
        }
    };
}

export function initPageFocus() {
    return {
        type: INIT_PAGE_FOCUS,
        payload: {}
    }
}


const INIT_STATE = {
    page: ''
}

export default function pageFocusDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_PAGE_FOCUS:
            newState.page = action.payload.page;
            return newState;
        case INIT_PAGE_FOCUS:
            newState.page = '';
            return newState;
        default:
            return state;
    }
}
