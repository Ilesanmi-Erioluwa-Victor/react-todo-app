import axios from "axios";
import * as types from "./actionTypes";
import { saveToLocalStorage } from "../../util/LocalStorage";
import { setToast } from "../../util/Authenticate";

const register = (payload, toast) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((r) => {
      console.log(r.data);
      setToast(toast, "Registered Successful", "success");
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: types.REGISTER_FAILURE, payload: e });
    });
};

const login = (payload, toast) => (dispatch) => {
  saveToLocalStorage("userCredentials", payload.username);
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
    .then((r) => {
      console.log(r.data);
      setToast(toast, "Login Successful", "success");
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};

const profile = (payload) => (dispatch) => {
  dispatch({ type: types.PROFILE_REQUEST });
  const options = {
    method: "GET",
    url: `https://masai-api-mocker.herokuapp.com/user/${payload.username}`,
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return axios(options)
    .then((r) => {
      dispatch({
        type: types.PROFILE_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => dispatch({ type: types.PROFILE_FAILURE, payload: e }));
};

export { login, register, profile };
