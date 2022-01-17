//this duck set the color of the hamburger menu. When the value is false the hamburger menu is dark, 
//when the value is true the hamburger menu is white
const SET_BLOG_API = 'WEB/BLOG_API/SET_BLOG_API'
const INIT_BLOG_API = 'WEB/BLOG_API/INIT_BLOG_API'

export function setBlogApi(value) {
    return {
        type: SET_BLOG_API,
        payload: {
            blog_obj_api: value
        }
    };
}

export function initBlogApi() {
    return {
        type: INIT_BLOG_API,
        payload: {}
    }
}


const INIT_STATE = {
    blog_obj_api: {}
}

export default function blogApiDuck(state = INIT_STATE, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_BLOG_API:
            newState.blog_obj_api = action.payload.blog_obj_api;
            return newState;
        case INIT_BLOG_API:
            newState.blog_obj_api = {};
            return newState;
        default:
            return state;
    }
}
