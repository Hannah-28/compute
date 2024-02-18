import * as types from '../../action-types';
import { rebootSoftSingleServer as initialState } from '../initialStates';

const rebootSoftSingleServer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.REBOOT_SOFT_SINGLE_SERVER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.REBOOT_SOFT_SINGLE_SERVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.REBOOT_SOFT_SINGLE_SERVER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.REBOOT_SOFT_SINGLE_SERVER_CLEANUP:
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

export default rebootSoftSingleServer;
