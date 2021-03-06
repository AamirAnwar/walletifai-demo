export const LOGIN_USER = 'login_user';

import axios from 'axios';
const ROOT_URL = 'http://localhost:5000';

export function loginUser(username, password) {
  const data = {
    username: username,
    password: password
  };
  return (dispatch) => {
    axios.post(`${ROOT_URL}/login`, data).then(res => {
      dispatch({type:LOGIN_USER, payload:res});
    }).catch((err) => {
      console.log("Login Action failed!");
      console.log(err);
    });
  }
}