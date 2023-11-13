import axios from 'axios';
import toast from 'react-hot-toast';
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

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`/users/signup`, credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      toast.error(
        'E-mail or password is wrong. Please enter the correct e-mail and password'
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`/users/login`, credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post(`/users/logout`);
    clearAuthHeader();
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue();
    }
  }
);
