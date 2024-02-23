import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getProfileStart = () => ({
  type: types.GET_PROFILE_START,
});

export const getProfileSuccess = (payload) => ({
  type: types.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFail = (payload) => ({
  type: types.GET_PROFILE_FAIL,
  payload,
});

export const getProfileCleanup = () => ({
  type: types.GET_PROFILE_CLEANUP,
});

export const getProfile = (id) => async (dispatch) => {
  try {
    dispatch(getProfileStart());
    const id = localStorage.getItem('profileID');
    const requestObj = {
      path: `/profile/${id}`,
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getProfileSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getProfileFail(error));
  }
};
