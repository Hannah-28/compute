import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getServersStart = () => ({
  type: types.GET_SERVERS_START,
});

export const getServersSuccess = (payload) => ({
  type: types.GET_SERVERS_SUCCESS,
  payload,
});

export const getServersFail = (payload) => ({
  type: types.GET_SERVERS_FAIL,
  payload,
});

export const getServersCleanup = () => ({
  type: types.GET_SERVERS_CLEANUP,
});

export const getServers = () => async (dispatch) => {
  try {
    dispatch(getServersStart());
    const requestObj = {
      path: '/servers',
      method: 'GET',
    };
    const data  = await AxiosCall(requestObj);
    dispatch(getServersSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getServersFail(error));
  }
};
