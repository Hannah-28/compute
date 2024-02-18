import * as types from '../../action-types';
import { getServers as initialState } from '../initialStates';

const getServers = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_SERVERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SERVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_SERVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_SERVERS_CLEANUP:
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

export default getServers;
