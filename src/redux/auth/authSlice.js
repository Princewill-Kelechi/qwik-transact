import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  profile: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    cleanseToken: (state) => {
      state.token = "";
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.profile = {};
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    cleanseProfile: (state) => {
      state.profile = {};
    },
  },
});

export const { setToken, cleanseToken, logIn, logOut, cleanseProfile, setProfile } =
  authSlice.actions;

export default authSlice.reducer;
