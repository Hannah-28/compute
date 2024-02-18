import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const stopSingleServerStart = () => ({
  type: types.STOP_SINGLE_SERVER_START,
});

export const stopSingleServerSuccess = (payload) => ({
  type: types.STOP_SINGLE_SERVER_SUCCESS,
  payload,
});

export const stopSingleServerFail = (payload) => ({
  type: types.STOP_SINGLE_SERVER_FAIL,
  payload,
});

export const stopSingleServerCleanup = () => ({
  type: types.STOP_SINGLE_SERVER_CLEANUP,
});

export const stopSingleServer = (id, payload) => async (dispatch) => {
  try {
    dispatch(stopSingleServerStart());
    const requestObj = {
      path: `/servers/${id}/action`,
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(stopSingleServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(stopSingleServerFail(error));
  }
};
