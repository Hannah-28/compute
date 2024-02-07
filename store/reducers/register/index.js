import * as types from '../../action-types';
import { register as initialState } from '../initialStates';

const register = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.REGISTER_CLEANUP:
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

export default register;
