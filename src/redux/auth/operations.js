import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

// const BASE_URL = `https://connections-api.herokuapp.com`;

const setAuthHeader = token => {
  //   console.log(axios.defaults.headers);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const res = await axios.post(`/users/signup`, credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const res = await axios.post(`/users/login`, credentials);
    console.log(res.data);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const res = await axios.post(`/users/logout`);
    console.log(`logging out`);
    clearAuthHeader();
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(`Unable to fetch user`);
    }
    setAuthHeader(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
