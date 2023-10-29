import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import { authApi } from "../redux/auth/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});


setupListeners(store.dispatch)