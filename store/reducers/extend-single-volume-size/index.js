import * as types from '../../action-types';
import { extendSingleVolumeSize as initialState } from '../initialStates';

const extendSingleVolumeSize = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.EXTEND_SINGLE_VOLUME_SIZE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.EXTEND_SINGLE_VOLUME_SIZE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.EXTEND_SINGLE_VOLUME_SIZE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.EXTEND_SINGLE_VOLUME_SIZE_CLEANUP:
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

export default extendSingleVolumeSize;
