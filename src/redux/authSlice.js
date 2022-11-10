import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'redux/authAPI';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logoutUser.matchFulfilled,
      (state, _) => {
        state.token = null;
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchPending,
      (state) => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;