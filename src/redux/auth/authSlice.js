import { register, login, logout, refreshCurrentUser } from './operations';
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
      state.error = null;
      state.isRefreshing = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
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
      state.error = null;
      state.isRefreshing = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    });
    builder.addCase(logout.pending, state => {
      state.error = null;
      state.isRefreshing = true;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    });
    builder.addCase(refreshCurrentUser.pending, state => {
      state.error = null;
      state.isRefreshing = true;
    });
    builder.addCase(refreshCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshCurrentUser.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
