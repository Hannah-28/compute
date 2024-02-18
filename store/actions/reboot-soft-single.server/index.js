import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const rebootSoftSingleServerStart = () => ({
  type: types.REBOOT_SOFT_SINGLE_SERVER_START,
});

export const rebootSoftSingleServerSuccess = (payload) => ({
  type: types.REBOOT_SOFT_SINGLE_SERVER_SUCCESS,
  payload,
});

export const rebootSoftSingleServerFail = (payload) => ({
  type: types.REBOOT_SOFT_SINGLE_SERVER_FAIL,
  payload,
});

export const rebootSoftSingleServerCleanup = () => ({
  type: types.REBOOT_SOFT_SINGLE_SERVER_CLEANUP,
});

export const rebootSoftSingleServer = (id, payload) => async (dispatch) => {
  try {
    dispatch(rebootSoftSingleServerStart());
    const requestObj = {
      path: `/servers/${id}/action`,
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(rebootSoftSingleServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(rebootSoftSingleServerFail(error));
  }
};
