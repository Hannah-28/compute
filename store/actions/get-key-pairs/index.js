import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getKeyPairsStart = () => ({
  type: types.GET_KEY_PAIRS_START,
});

export const getKeyPairsSuccess = (payload) => ({
  type: types.GET_KEY_PAIRS_SUCCESS,
  payload,
});

export const getKeyPairsFail = (payload) => ({
  type: types.GET_KEY_PAIRS_FAIL,
  payload,
});

export const getKeyPairsCleanup = () => ({
  type: types.GET_KEY_PAIRS_CLEANUP,
});

export const getKeyPairs = () => async (dispatch) => {
  try {
    dispatch(getKeyPairsStart());
    const requestObj = {
      path: '/get_key_pairs',
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getKeyPairsSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getKeyPairsFail(error));
  }
};
