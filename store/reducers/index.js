import { combineReducers } from 'redux';
import register from './register';
import login from './login';

const baseReducers = combineReducers({
  register,
  login,
});

export default baseReducers;
