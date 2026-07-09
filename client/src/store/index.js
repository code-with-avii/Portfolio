import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import messageReducer from "./slices/messageSlice.js";
import { apiSlice } from "./apiSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
