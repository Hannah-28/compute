import * as types from '../../action-types';
import { getSingleServer as initialState } from '../initialStates';

const getSingleServer = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_SERVER_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_SINGLE_SERVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_SINGLE_SERVER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_SINGLE_SERVER_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null
      };
    default:
      return state;
  }
}

export default getSingleServer;
