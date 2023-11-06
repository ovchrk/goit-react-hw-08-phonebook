const { createAsyncThunk } = require('@reduxjs/toolkit');
const { axios } = require('axios');

const BASE_URL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
    return data;
  } catch (err) {
    console.log(err);
  }
});
