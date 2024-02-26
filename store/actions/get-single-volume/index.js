import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getSingleVolumeStart = () => ({
  type: types.GET_SINGLE_VOLUME_START,
});

export const getSingleVolumeSuccess = (payload) => ({
  type: types.GET_SINGLE_VOLUME_SUCCESS,
  payload,
});

export const getSingleVolumeFail = (payload) => ({
  type: types.GET_SINGLE_VOLUME_FAIL,
  payload,
});

export const getSingleVolumeCleanup = () => ({
  type: types.GET_SINGLE_VOLUME_CLEANUP,
});

export const getSingleVolume = (id) => async (dispatch) => {
  try {
    dispatch(getSingleVolumeStart());
    const projectID = localStorage.getItem('projectID');
    const requestObj = {
      path: `/${projectID}/volumes/${id}`,
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getSingleVolumeSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getSingleVolumeFail(error));
  }
};
