import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice';

const store = configureStore({
  reducer: {
    locationReducer
  },
});

export default store;
