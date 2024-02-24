import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const createServerStart = () => ({
  type: types.CREATE_SERVER_START,
});

export const createServerSuccess = (payload) => ({
  type: types.CREATE_SERVER_SUCCESS,
  payload,
});

export const createServerFail = (payload) => ({
  type: types.CREATE_SERVER_FAIL,
  payload,
});

export const createServerCleanup = () => ({
  type: types.CREATE_SERVER_CLEANUP,
});

export const createServer = (payload) => async (dispatch) => {
  try {
    dispatch(createServerStart());
    const requestObj = {
      path: '/create_server',
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(createServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(createServerFail(error));
  }
};
