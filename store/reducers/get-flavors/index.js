import * as types from '../../action-types';
import { getFlavors as initialState } from '../initialStates';

const getFlavors = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_FLAVORS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_FLAVORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_FLAVORS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_FLAVORS_CLEANUP:
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

export default getFlavors;
