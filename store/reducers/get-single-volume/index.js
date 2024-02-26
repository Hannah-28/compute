import * as types from '../../action-types';
import { getSingleVolume as initialState } from '../initialStates';

const getSingleVolume = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_VOLUME_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SINGLE_VOLUME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.GET_SINGLE_VOLUME_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.GET_SINGLE_VOLUME_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
      };
    default:
      return state;
  }
};

export default getSingleVolume;
