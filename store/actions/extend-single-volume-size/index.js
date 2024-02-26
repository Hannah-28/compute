import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const extendSingleVolumeSizeStart = () => ({
  type: types.EXTEND_SINGLE_VOLUME_SIZE_START,
});

export const extendSingleVolumeSizeSuccess = (payload) => ({
  type: types.EXTEND_SINGLE_VOLUME_SIZE_SUCCESS,
  payload,
});

export const extendSingleVolumeSizeFail = (payload) => ({
  type: types.EXTEND_SINGLE_VOLUME_SIZE_FAIL,
  payload,
});

export const extendSingleVolumeSizeCleanup = () => ({
  type: types.EXTEND_SINGLE_VOLUME_SIZE_CLEANUP,
});

export const extendSingleVolumeSize = (id, payload) => async (dispatch) => {
  try {
    dispatch(extendSingleVolumeSizeStart());
    const projectID = localStorage.getItem('projectID');
    const requestObj = {
      path: `/${projectID}/volumes/${id}/action`,
      method: 'POST',
      data: payload,
    };
    const data = await AxiosCall(requestObj);
    dispatch(extendSingleVolumeSizeSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(extendSingleVolumeSizeFail(error));
  }
};
