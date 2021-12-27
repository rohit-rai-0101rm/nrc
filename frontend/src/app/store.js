import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { messagesApi } from '../services/messagesApi';
export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]:messagesApi.reducer,
  },
});
