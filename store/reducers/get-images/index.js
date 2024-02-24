import * as types from '../../action-types';
import { getImages as initialState } from '../initialStates';

const getImages = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_IMAGES_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_IMAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_IMAGES_CLEANUP:
      return {
        ...state,
        error: null,
        isLoading: false,
        isSuccessful: false,
      };
    default:
      return state;
  }
};

export default getImages;
