//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_COMMUNITY_API = 'WEB/COMMUNITY_API/SET_COMMUNITY_API'
const INIT_COMMUNITY_API = 'WEB/COMMUNITY_API/INIT_COMMUNITY_API'

export function setCommunityApi(value) {
    return {
        type: SET_COMMUNITY_API,
        payload: {
            community_obj_api: value
        }
    };
}

export function initCommunityApi() {
    return {
        type: INIT_COMMUNITY_API,
        payload: {}
    }
}


const INIT_STATE = {
    community_obj_api: {}
}

export default function communityApiDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_COMMUNITY_API:
            newState.community_obj_api = action.payload.community_obj_api;
            return newState;
        case INIT_COMMUNITY_API:
            newState.community_obj_api = {};
            return newState;
        default:
            return state;
    }
}
