import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { authApi } from "../../app/services/authApi";
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as {
    user: null | any;
    token: null | string;
    isRegisterSuccess: null | boolean;
  },
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = user;
      state.token = token;
    },

    removeIsRegister: (
      state,
      {
        payload: { isRegisterSuccess },
      }: PayloadAction<{ isRegisterSuccess: boolean | null }>
    ) => {
      console.log("state.isRegisterSuccess: " + isRegisterSuccess);
      state.isRegisterSuccess = isRegisterSuccess;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, payload) => {
        state.isRegisterSuccess = true;
      }
    );
  },
});

export const { setCredentials, removeIsRegister } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectSuccessRegister = (state: RootState) =>
  state.auth.isRegisterSuccess;
