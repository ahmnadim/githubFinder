import React, {useReducer} from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import {SET_ALERT, REMOVE_ALERT} from '../../type'

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);
  
    const setAlert = (msg, type) => {
      dispatch({type: SET_ALERT, payload: {msg, type}});

      setTimeout(() => dispatch({type: REMOVE_ALERT}), 3000);
    }

    return <AlertContext.Provider value={{ setAlert, alert: state
        }}>
        {props.children}
    </AlertContext.Provider>

}

export default AlertState;