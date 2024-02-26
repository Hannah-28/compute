import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const createVolumeStart = () => ({
  type: types.CREATE_VOLUME_START,
});

export const createVolumeSuccess = (payload) => ({
  type: types.CREATE_VOLUME_SUCCESS,
  payload,
});

export const createVolumeFail = (payload) => ({
  type: types.CREATE_VOLUME_FAIL,
  payload,
});

export const createVolumeCleanup = () => ({
  type: types.CREATE_VOLUME_CLEANUP,
});

export const createVolume = (payload) => async (dispatch) => {
  try {
    dispatch(createVolumeStart());
    const id = localStorage.getItem('projectID');
    const requestObj = {
      path: `/${id}/create_volume`,
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(createVolumeSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(createVolumeFail(error));
  }
};
