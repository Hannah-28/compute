import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getVolumesStart = () => ({
  type: types.GET_VOLUMES_START,
});

export const getVolumesSuccess = (payload) => ({
  type: types.GET_VOLUMES_SUCCESS,
  payload,
});

export const getVolumesFail = (payload) => ({
  type: types.GET_VOLUMES_FAIL,
  payload,
});

export const getVolumesCleanup = () => ({
  type: types.GET_VOLUMES_CLEANUP,
});

export const getVolumes = (id) => async (dispatch) => {
  try {
    dispatch(getVolumesStart());
    const id = localStorage.getItem('projectID');
    const requestObj = {
      path: `/${id}/volumes`,
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getVolumesSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getVolumesFail(error));
  }
};
