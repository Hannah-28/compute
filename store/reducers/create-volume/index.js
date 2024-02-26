import * as types from '../../action-types';
import { createVolume as initialState } from '../initialStates';

const createVolume = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_VOLUME_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_VOLUME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.CREATE_VOLUME_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.CREATE_VOLUME_CLEANUP:
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

export default createVolume;
