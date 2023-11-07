import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');

const BASE_URL = `https://connections-api.herokuapp.com`;
// axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const res = await axios.post(`${BASE_URL}/users/signup`, credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const res = await axios.post(`${BASE_URL}/users/login`, credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
