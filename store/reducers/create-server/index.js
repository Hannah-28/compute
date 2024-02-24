import * as types from '../../action-types';
import { createServer as initialState } from '../initialStates';

const createServer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_SERVER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_SERVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.CREATE_SERVER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.CREATE_SERVER_CLEANUP:
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

export default createServer;
