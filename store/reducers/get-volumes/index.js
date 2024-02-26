import * as types from '../../action-types';
import { getVolumes as initialState } from '../initialStates';

const getVolumes = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_VOLUMES_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_VOLUMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_VOLUMES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_VOLUMES_CLEANUP:
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

export default getVolumes;
