import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTestResponse: builder.query({
      query: (name) => `pokemon/${name}`,
    }),

    register: builder.mutation({
      query: (data) => {
        return {
          url: "/register",
          method: "POST",
          body: data,
        };
      },
    }),

    signIn: builder.mutation({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),

    verifyEmail: builder.mutation({
      query: (data) => {
        return {
          url: "/verify-email",
          method: "POST",
          body: data,
        };
      },
    }),

    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/forgot-password",
          method: "POST",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/reset-password",
          method: "POST",
          body: data,
        };
      },
    }),

    resendOTP: builder.mutation({
      query: (data) => {
        return {
          url: "/resend-otp",
          method: "POST",
          body: data,
        };
      },
    }),

    getProfile: builder.query({
      query: () => {
        return {
          url: "/profile",
          method: "GET",
        };
      },
    }),

    lend: builder.mutation({
      query: (data) => {
        return {
          url: "/lend",
          method: "POST",
          body: data,
        };
      },
    }),

    bacomeAMerchant: builder.mutation({
      query: (data) => {
        return {
          url: "/become-a-merchant",
          method: "POST",
          body: data,
        };
      },
    }),

    getLenders: builder.query({
      query: () => {
        return {
          url: "/lenders",
          method: "GET",
        };
      },
    }),

    requestLoan: builder.mutation({
      query: (data) => {
        return {
          url: `/request-loan/${data?.lenderId}`,
          method: "POST",
          body: data,
        };
      },
    }),

    loansGiven: builder.query({
      query: (data) => {
        return {
          url: "/given-loans",
          method: "GET",
        };
      },
    }),

    requestedLoans: builder.mutation({
      query: (data) => {
        return {
          url: "/requested-loans",
          method: "GET",
        };
      },
    }),

    fundWallet: builder.mutation({
      query: (data) => {
        return {
          url: "/fund-wallet",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetTestResponseQuery,
  useBacomeAMerchantMutation,
  useForgotPasswordMutation,
  useFundWalletMutation,
  useGetLendersQuery,
  useGetProfileQuery,
  useLendMutation,
  useLoansGivenQuery,
  useRegisterMutation,
  useResendOTPMutation,
  useRequestLoanMutation,
  useResetPasswordMutation,
  useSignInMutation,
  useVerifyEmailMutation,
  useRequestedLoansMutation,
} = authApi;
