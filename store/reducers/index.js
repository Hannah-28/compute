import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import getProfile from './get-profile';
import getServers from './get-servers';
import getSingleServer from './get-single-server';
import stopSingleServer from './stop-single-server';
import startSingleServer from './start-single-server';
import rebootHardSingleServer from './reboot-hard-single-server';
import rebootSoftSingleServer from './reboot-soft-single-server';
import deleteSingleServer from './delete-single-server';

const baseReducers = combineReducers({
  register,
  login,
  getProfile,
  getServers,
  getSingleServer,
  stopSingleServer,
  startSingleServer,
  rebootHardSingleServer,
  rebootSoftSingleServer,
  deleteSingleServer,
});

export default baseReducers;
