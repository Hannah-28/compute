import Axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

let baseURL;
if (SERVER_HOST) {
  baseURL = `${SERVER_HOST}/api`;
} else {
  const host = 'http://127.0.0.1:5000';
  baseURL = `${host}`;
}

const AxiosCall = async (requestObj) => {
  const { path, method, data, contentType } = requestObj;

  const token = localStorage.getItem('authToken');

  const headers = {
    'X-Auth-Token': token,
    'Content-Type': contentType || 'application/json',
  };

  const url = `${baseURL}${path}`;
  try {
    const response = await Axios({ method, url, data, headers, json: true });
    const result = response && response.data;
    return result;
  } catch (error) {
    console.log({ error: error.response.data.error });
    if (error.response.data.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    throw error;
  }
};

export default AxiosCall;
