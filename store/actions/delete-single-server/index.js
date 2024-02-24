import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const deleteSingleServerStart = () => ({
  type: types.DELETE_SINGLE_SERVER_START,
});

export const deleteSingleServerSuccess = (payload) => ({
  type: types.DELETE_SINGLE_SERVER_SUCCESS,
  payload,
});

export const deleteSingleServerFail = (payload) => ({
  type: types.DELETE_SINGLE_SERVER_FAIL,
  payload,
});

export const deleteSingleServerCleanup = () => ({
  type: types.DELETE_SINGLE_SERVER_CLEANUP,
});

export const deleteSingleServer = (id) => async (dispatch) => {
  try {
    dispatch(deleteSingleServerStart());
    const requestObj = {
      path: `/servers/${id}`,
      method: 'DELETE',
    };
    const data = await AxiosCall(requestObj);
    dispatch(deleteSingleServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(deleteSingleServerFail(error));
  }
};
