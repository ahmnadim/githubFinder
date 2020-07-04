import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'
import {SEARCH_USERS, SET_LOADING, CLEAR_USER, GET_USER} from '../../type'

const GithubState = props => {
    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    
    //search for users...
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        dispatch({ type: SEARCH_USERS, payload: res.data.items })
      }

      //get single user...
      const getUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
       dispatch({type:GET_USER, payload: res.data});
      }
    

      //clear all users...
      const clearUsers = () => dispatch({type: CLEAR_USER});

      //loader...
      const setLoading = () => dispatch({type: SET_LOADING});


    return <GithubContext.Provider value={{
        users: state.users, user: state.user, repos: state.repos, loading: state.loading, searchUsers, clearUsers, getUser
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState;