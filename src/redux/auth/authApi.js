import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getTestResponse: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetTestResponseQuery } = authApi;
