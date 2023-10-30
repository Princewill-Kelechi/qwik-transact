import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import * as RootNavigation from "@navigation/RootNavigation";

export const BASE_URL = "https://eager-lime-windbreaker.cyclic.app/";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.token;
    // If we have a token set in state, pass it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithTokenCheck = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error && result?.error?.status === 401) {
    RootNavigation.navigate("SignIn", { tokenExpired: true });
  }
  return result;
};
