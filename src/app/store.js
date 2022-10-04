import { configureStore } from '@reduxjs/toolkit';
import { fruitsApiSlice } from '../features/fruits/fruitsApiSlice';

export const store = configureStore({
  reducer: {
    [fruitsApiSlice.reducerPath]: fruitsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fruitsApiSlice.middleware),
});
