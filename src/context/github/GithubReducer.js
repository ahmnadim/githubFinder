import {SEARCH_USERS, SET_LOADING, CLEAR_USER, GET_USER} from '../../type'

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            };
        case CLEAR_USER:
            return {
                ...state,
                users: [],
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default: 
            return state
    };
}