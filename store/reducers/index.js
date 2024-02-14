import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import getProfile from './get-profile';

const baseReducers = combineReducers({
  register,
  login,
  getProfile
});

export default baseReducers;
