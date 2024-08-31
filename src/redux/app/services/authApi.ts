import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GenericDtoBody,
  GenericDtoResult,
  AuthLoginRequest,
  AuthLoginResult,
  AuthRegisterRequest,
  UserResponse,
} from "../../../types/index";
import { RootState } from "../store";
import { BASE_API_URL } from "../../../utils/constant";

const AUTH_REGISTER_URL = "/auth/register";
const AUTH_LOGIN_URL = "/auth/login";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    credentials: "include",
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authentication", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      GenericDtoResult<AuthLoginRequest>,
      GenericDtoBody<AuthLoginRequest>
    >({
      query: (requestBody) => ({
        url: AUTH_LOGIN_URL,
        method: "POST",
        body: requestBody,
      }),
    }),

    register: builder.mutation<
      GenericDtoResult<Object>,
      GenericDtoBody<AuthRegisterRequest>
    >({
      query: (requestBody) => ({
        url: AUTH_REGISTER_URL,
        method: "POST",
        body: requestBody,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
