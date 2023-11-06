import register from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //   extraReducers: builder => {
  //     builder.addCase(register.pending, (state, action) => {
  //       state.isLoading = true;
  //     });
  //   },
});
export const authReducer = authSlice.reducer;
