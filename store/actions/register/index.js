import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const registerStart = () => ({
  type: types.REGISTER_START,
});

export const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

export const registerFail = (payload) => ({
  type: types.REGISTER_FAIL,
  payload,
});

export const registerCleanup = () => ({
  type: types.REGISTER_CLEANUP,
});

export const register = (payload) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const requestObj = {
      path: '/create_user',
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(registerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(registerFail(error));
  }
};
