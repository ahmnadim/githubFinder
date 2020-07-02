import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'
import {SEARCH_USERS, SET_LOADING, GET_USERS, GET_REPOS, CLEAR_USER} from '../../type'

const GithubState = props => {
    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      }

      const setLoading = () => dispatch({type: SET_LOADING});


    return <GithubContext.Provider value={{
        users: state.users, user: state.user, repos: state.repos, loading: state.loading, searchUsers
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState;