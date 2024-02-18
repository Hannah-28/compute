import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const startSingleServerStart = () => ({
  type: types.START_SINGLE_SERVER_START,
});

export const startpSingleServerSuccess = (payload) => ({
  type: types.START_SINGLE_SERVER_SUCCESS,
  payload,
});

export const startSingleServerFail = (payload) => ({
  type: types.START_SINGLE_SERVER_FAIL,
  payload,
});

export const startSingleServerCleanup = () => ({
  type: types.START_SINGLE_SERVER_CLEANUP,
});

export const startSingleServer = (id, payload) => async (dispatch) => {
  try {
    dispatch(startSingleServerStart());
    const requestObj = {
      path: `/servers/${id}/action`,
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(startSingleServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(startSingleServerFail(error));
  }
};
