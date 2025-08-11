import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';

const store = configureStore({
  reducer: {
    // authReducer
     locationSlice
  },
});

export default store;