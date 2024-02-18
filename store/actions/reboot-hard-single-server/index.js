import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const rebootHardSingleServerStart = () => ({
  type: types.REBOOT_HARD_SINGLE_SERVER_START,
});

export const rebootHardSingleServerSuccess = (payload) => ({
  type: types.REBOOT_HARD_SINGLE_SERVER_SUCCESS,
  payload,
});

export const rebootHardSingleServerFail = (payload) => ({
  type: types.REBOOT_HARD_SINGLE_SERVER_FAIL,
  payload,
});

export const rebootHardSingleServerCleanup = () => ({
  type: types.REBOOT_HARD_SINGLE_SERVER_CLEANUP,
});

export const rebootHardSingleServer = (id, payload) => async (dispatch) => {
  try {
    dispatch(rebootHardSingleServerStart());
    const requestObj = {
      path: `/servers/${id}/action`,
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(rebootHardSingleServerSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(rebootHardSingleServerFail(error));
  }
};
