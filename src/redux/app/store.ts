// src/app/store.ts
import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userProfileApi } from "../services/userProfileApi";
import { authApi } from "./services/authApi";
import auth from "../features/auth/authSlice";

// import { userProfileApi } from "../services/userProfileApi";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      // Add the userApi reducer to the store
      [authApi.reducerPath]: authApi.reducer,
      [userProfileApi.reducerPath]: userProfileApi.reducer,
      auth,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        userProfileApi.middleware
      ),
  });

export const store = createStore();

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
