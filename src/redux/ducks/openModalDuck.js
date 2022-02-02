//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_MODAL = 'WEB/MODAL/SET_MODAL'
const INIT_MODAL = 'WEB/MODAL/INIT_MODAL'

export function setModal(value) {
    return {
        type: SET_MODAL,
        payload: {
            openModal: value
        }
    };
}

export function initModal() {
    return {
        type: INIT_MODAL,
        payload: {}
    }
}


const INIT_STATE = {
    openModal: false
}

export default function openModalDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_MODAL:
            newState.openModal = action.payload.openModal;
            return newState;
        case INIT_MODAL:
            newState.openModal = false;
            return newState;
        default:
            return state;
    }
}
