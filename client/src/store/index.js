import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import portfolioReducer from './slices/portfolioSlice.js';
import messageReducer from './slices/messageSlice.js';

export const store = configureStore({
 reducer: {
 auth: authReducer,
 portfolio: portfolioReducer,
 messages: messageReducer,
 },
});

