import axios from "axios";
import * as TYPES from "./actionTypes";
 
const END_POINT = `${window.location.protocol}//${window.location.hostname}:4000`

export const changePage = payload => dispatch => {
  dispatch({ type: TYPES.PAGE_CHANGED, payload });
};

export const signUp = payload => async dispatch => { 
  axios
    .post(`${END_POINT}/user`, payload)
    .then((response) => {
      dispatch({type: TYPES.SIGNUP_SUCCESS, payload: response});
    })
    .catch((error) => dispatch({type: TYPES.SIGNUP_ERROR, payload: error}) );
}

export const login = payload => async dispatch => { 
  axios
    .post(`${END_POINT}/login`, payload)
    .then((res) => {
      console.log('#CC ',res.data.result);
      if(res.data.result && res.data.result.length){
        dispatch({type: TYPES.LOGIN_SUCCESS, payload: 'Login Success!!'});
      }else{
        dispatch({type: TYPES.LOGIN_ERROR, payload: 'Your password or email is incorrect!'}) 
      }
    })
    .catch((error) => dispatch({type: TYPES.LOGIN_ERROR, payload: error}) );
}