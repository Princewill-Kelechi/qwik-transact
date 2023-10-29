import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
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
  },
});

export const { setToken, cleanseToken } = authSlice.actions;

export default authSlice.reducer;
