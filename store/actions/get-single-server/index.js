import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getSingleServerStart = () => ({
  type: types.GET_SINGLE_SERVER_START,
});

export const getSingleServerSuccess = (payload) => ({
  type: types.GET_SINGLE_SERVER_SUCCESS,
  payload,
});

export const getSingleServerFail = (payload) => ({
  type: types.GET_SINGLE_SERVER_FAIL,
  payload,
});

export const getSingleServerCleanup = () => ({
  type: types.GET_SINGLE_SERVER_CLEANUP,
});

export const getSingleServer = (id) => async (dispatch) => {
  try {
    dispatch(getSingleServerStart());

    const requestObj = {
      path: `/servers/${id}`,
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getSingleServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getSingleServerFail(error));
  }
};
