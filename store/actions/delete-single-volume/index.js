import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const deleteSingleVolumeStart = () => ({
  type: types.DELETE_SINGLE_VOLUME_START,
});

export const deleteSingleVolumeSuccess = (payload) => ({
  type: types.DELETE_SINGLE_VOLUME_SUCCESS,
  payload,
});

export const deleteSingleVolumeFail = (payload) => ({
  type: types.DELETE_SINGLE_VOLUME_FAIL,
  payload,
});

export const deleteSingleVolumeCleanup = () => ({
  type: types.DELETE_SINGLE_VOLUME_CLEANUP,
});

export const deleteSingleVolume = (id) => async (dispatch) => {
  try {
    dispatch(deleteSingleVolumeStart());
    const projectID = localStorage.getItem('projectID');
    const requestObj = {
      path: `/${projectID}/volumes/${id}`,
      method: 'DELETE',
    };
    const data = await AxiosCall(requestObj);
    dispatch(deleteSingleVolumeSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(deleteSingleVolumeFail(error));
  }
};
