import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getImagesStart = () => ({
  type: types.GET_IMAGES_START,
});

export const getImagesSuccess = (payload) => ({
  type: types.GET_IMAGES_SUCCESS,
  payload,
});

export const getImagesFail = (payload) => ({
  type: types.GET_IMAGES_FAIL,
  payload,
});

export const getImagesCleanup = () => ({
  type: types.GET_IMAGES_CLEANUP,
});

export const getImages = () => async (dispatch) => {
  try {
    dispatch(getImagesStart());
    const requestObj = {
      path: '/get_images',
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getImagesSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getImagesFail(error));
  }
};
