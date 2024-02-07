import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';
import Cookies from 'js-cookie';

export const loginStart = () => ({
  type: types.LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: types.LOGIN_FAIL,
  payload,
});

export const loginCleanup = () => ({
  type: types.LOGIN_CLEANUP,
});

export const login = (payload) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const requestObj = {
      path: '/login',
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    // something like this
    await Cookies.set('tok', data.token);
    await Cookies.set('ID', data.votersID);
    localStorage.setItem('authToken', data.token);
    dispatch(loginSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(loginFail(error));
  }
};
