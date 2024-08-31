// src/services/userApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../utils/constant";
import {
  GenericDtoBody,
  GenericDtoResult,
  UserProfile,
  AuthLoginRequest,
} from "../../types";

export const userProfileApi = createApi({
  tagTypes: ["UserProfile"],
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getNoAuthUserProfile: builder.query<GenericDtoResult<UserProfile>, void>({
      query: () => "/user/noAuthUserProfile",
      providesTags: ["UserProfile"],
    }),

    // Mutation for registering a new user
    registerUser: builder.mutation<
      GenericDtoResult<Object>,
      GenericDtoBody<AuthLoginRequest>
    >({
      query: (registerRequest) => ({
        url: "user/register",
        method: "POST",
        body: {
          data: registerRequest, // Wrapping the register request in a GenericDto
        },
      }),
    }),
  }),
  keepUnusedDataFor: 60,
});

export const { useGetNoAuthUserProfileQuery, useRegisterUserMutation } =
  userProfileApi;
