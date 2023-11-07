import { register, login } from './operations';
import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
