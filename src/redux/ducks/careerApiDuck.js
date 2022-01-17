//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_CAREER_API = 'WEB/CAREER_API/SET_CAREER_API'
const INIT_CAREER_API = 'WEB/CAREER_API/INIT_CAREER_API'

export function setCareerApi(value) {
    return {
        type: SET_CAREER_API,
        payload: {
            career_obj_api: value
        }
    };
}

export function initCareerApi() {
    return {
        type: INIT_CAREER_API,
        payload: {}
    }
}


const INIT_STATE = {
    career_obj_api: {}
}

export default function careerApiDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_CAREER_API:
            newState.career_obj_api = action.payload.career_obj_api;
            return newState;
        case INIT_CAREER_API:
            newState.career_obj_api = {};
            return newState;
        default:
            return state;
    }
}
