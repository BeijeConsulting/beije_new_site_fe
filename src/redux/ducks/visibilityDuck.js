//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_VISIBILITY = 'WEB/VISIBILITY/SET_VISIBILITY'
const INIT_VISIBILITY = 'WEB/VISIBILITY/INIT_VISIBILITY'

export function setVisibility(value) {
    return {
        type: SET_VISIBILITY,
        payload: {
            visibility: value
        }
    };
}

export function initVisibility() {
    return {
        type: INIT_VISIBILITY,
        payload: {}
    }
}


const INIT_STATE = {
    visibility: true
}

export default function visibilityDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_VISIBILITY:
            newState.visibility = action.payload.visibility;
            return newState;
        case INIT_VISIBILITY:
            newState.visibility = true;
            return newState;
        default:
            return state;
    }
}
