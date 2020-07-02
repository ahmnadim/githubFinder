import {SEARCH_USERS, SET_LOADING, GET_USERS, GET_REPOS, CLEAR_USER} from '../../type'

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
            }
        default: 
            return state
    };
}