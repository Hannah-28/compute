import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getFlavorsStart = () => ({
  type: types.GET_FLAVORS_START,
});

export const getFlavorsSuccess = (payload) => ({
  type: types.GET_FLAVORS_SUCCESS,
  payload,
});

export const getFlavorsFail = (payload) => ({
  type: types.GET_FLAVORS_FAIL,
  payload,
});

export const getFlavorsCleanup = () => ({
  type: types.GET_FLAVORS_CLEANUP,
});

export const getFlavors = () => async (dispatch) => {
  try {
    dispatch(getFlavorsStart());
    const requestObj = {
      path: '/get_flavors',
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getFlavorsSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getFlavorsFail(error));
  }
};
