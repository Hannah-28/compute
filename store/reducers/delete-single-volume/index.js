import * as types from '../../action-types';
import { deleteSingleVolume as initialState } from '../initialStates';

const deleteSingleVolume = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_SINGLE_VOLUME_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_SINGLE_VOLUME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.DELETE_SINGLE_VOLUME_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.DELETE_SINGLE_VOLUME_CLEANUP:
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

export default deleteSingleVolume;
