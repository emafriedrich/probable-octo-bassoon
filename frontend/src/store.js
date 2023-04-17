import { configureStore } from '@reduxjs/toolkit'
import filesReducer from './fileList/state';

export const store = configureStore({
  reducer: {
    files: filesReducer,
  },
});
