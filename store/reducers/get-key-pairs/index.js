import * as types from '../../action-types';
import { getKeyPairs as initialState } from '../initialStates';

const getKeyPairs = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_KEY_PAIRS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_KEY_PAIRS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_KEY_PAIRS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_KEY_PAIRS_CLEANUP:
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

export default getKeyPairs;
